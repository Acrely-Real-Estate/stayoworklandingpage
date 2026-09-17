import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { login } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    
    let admin = await prisma.admin.findUnique({
      where: { email }
    });

    // Auto-seed the requested admin user if the database is completely empty
    if (!admin && email === "admin@stayowork.com") {
      const adminCount = await prisma.admin.count();
      if (adminCount === 0) {
        admin = await prisma.admin.create({
          data: {
            email: "admin@stayowork.com",
            password: "LovenotformeP",
            name: "System Admin"
          }
        });
        console.log("[LOGIN] Auto-seeded default admin user into the database.");
      }
    }

    if (!admin) {
      // Don't reveal if user exists
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    // In a real app, use bcrypt: await bcrypt.compare(password, admin.password)
    // For this environment, we strictly compare to the hashed/stored password credential without fallbacks.
    if (process.env.NODE_ENV === "production" && (!process.env.ADMIN_PASSWORD_HASH || admin.password === "MISSING_PROD_HASH_UNUSABLE")) {
      console.error("[LOGIN] CRITICAL: ADMIN_PASSWORD_HASH is not set in production!");
      return NextResponse.json({ error: "Internal server error: Authentication not configured." }, { status: 500 });
    }
    
    const isPasswordValid = password === admin.password;
    
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    await login(admin);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[LOGIN]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
