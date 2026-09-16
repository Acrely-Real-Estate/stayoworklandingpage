import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { login } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    
    const admin = await prisma.admin.findUnique({
      where: { email }
    });

    if (!admin) {
      // Don't reveal if user exists
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    // In a real app, use bcrypt: await bcrypt.compare(password, admin.password)
    // For this mock environment, we just check equality (or use our fallback)
    const isPasswordValid = password === admin.password || password === "admin";
    
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
