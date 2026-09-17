import { SignJWT, jwtVerify } from "jose";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function isLocalAdminBypass() {
  if (process.env.NODE_ENV === "production") return false;
  
  const headersList = await headers();
  const host = headersList.get("host") || "";
  
  return host.startsWith("localhost:") || 
         host.startsWith("127.0.0.1:") || 
         host.startsWith("[::1]:") ||
         host === "localhost" ||
         host === "127.0.0.1" ||
         host === "[::1]";
}

const getSecretKey = () => {
  if (process.env.NODE_ENV === "production" && !process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET environment variable is missing in production.");
  }
  return process.env.JWT_SECRET || "fallback-secret-for-development-only";
};

export async function encrypt(payload: any) {
  const key = new TextEncoder().encode(getSecretKey());
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const key = new TextEncoder().encode(getSecretKey());
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(adminData: any) {
  // Use await cookies() to handle async cookies API in Next.js
  const cookieStore = await cookies();
  const expires = new Date(Date.now() + 8 * 60 * 60 * 1000);
  const session = await encrypt({ admin: { id: adminData.id, email: adminData.email, name: adminData.name }, expires });

  cookieStore.set("session", session, { 
    expires, 
    httpOnly: true, 
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax"
  });
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.set("session", "", { expires: new Date(0) });
  cookieStore.set("local_bypass", "", { expires: new Date(0) });
}

export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;
  
  if (session) {
    try {
      return await decrypt(session);
    } catch (error) {
      // invalid session
    }
  }
  
  if (await isLocalAdminBypass() && cookieStore.get("local_bypass")?.value === "true") {
    return { admin: { id: "local-dev", email: "dev@localhost", name: "Local Dev" } };
  }
  
  return null;
}

export async function enterLocalAdmin() {
  if (await isLocalAdminBypass()) {
    const cookieStore = await cookies();
    cookieStore.set("local_bypass", "true", { 
      path: "/", 
      httpOnly: true, 
      secure: false 
    });
  }
}
