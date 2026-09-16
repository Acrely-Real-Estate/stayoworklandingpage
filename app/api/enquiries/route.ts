import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { enquirySchema } from "@/lib/validations";
import { sendEnquiryNotification } from "@/lib/mail";

// Simple in-memory rate limiting (Production requires Redis/Upstash)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

export async function POST(request: Request) {
  try {
    // 0. Basic Rate Limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute
    
    if (ip !== "unknown") {
      const record = rateLimitMap.get(ip);
      if (record && now - record.timestamp < windowMs) {
        if (record.count > 5) {
          return NextResponse.json({ error: "Too many requests" }, { status: 429 });
        }
        record.count++;
      } else {
        rateLimitMap.set(ip, { count: 1, timestamp: now });
      }
    }

    // 0.5 Size check (Content-Length)
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > 1024 * 50) { // 50KB max
      return NextResponse.json({ error: "Payload too large" }, { status: 413 });
    }

    const body = await request.json();

    // 1. Validation (includes honeypot check in Zod schema)
    const result = enquirySchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid data provided", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;

    // 2. Honeypot check (extra safety)
    if (data.website && data.website.length > 0) {
      // Act like it succeeded to fool bots
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 3. Transform array to string for database if needed
    // (Our Prisma schema uses String? @db.Text for servicesRequired)
    const servicesString = data.servicesRequired && data.servicesRequired.length > 0 
      ? data.servicesRequired.join(", ") 
      : null;

    // 4. Save to Database
    const newEnquiry = await prisma.enquiry.create({
      data: {
        companyName: data.companyName,
        contactName: data.contactName,
        designation: data.designation || "",
        email: data.email,
        phone: data.phone,
        workLocation: data.workLocation,
        workforceType: data.workforceType,
        accommodationRequirement: data.accommodationRequirement,
        timeline: data.timeline,
        servicesRequired: servicesString,
        message: data.message || "",
        status: "NEW"
      }
    });

    // 5. Trigger Internal Notification
    // We don't await this so it doesn't block the response, or we can await it if we want it guaranteed
    // Best practice is to run it async and gracefully handle failures internally.
    sendEnquiryNotification(newEnquiry).catch(console.error);

    return NextResponse.json(
      { success: true, id: newEnquiry.id },
      { status: 201 }
    );
    
  } catch (error) {
    console.error("[API] Enquiry creation failed:", error);
    // Generic error response without leaking internals
    return NextResponse.json(
      { error: "An error occurred while processing your requirement." },
      { status: 500 }
    );
  }
}
