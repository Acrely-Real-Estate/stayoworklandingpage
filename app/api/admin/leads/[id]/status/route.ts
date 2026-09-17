import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { status } = await request.json();
    const resolvedParams = await params;
    const { id } = resolvedParams;

    const validStatuses = [
      "NEW", "CONTACTED", "QUALIFIED", "REQUIREMENT_RECEIVED", 
      "PROPOSAL", "NEGOTIATION", "WON", "LOST"
    ];

    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    const updatedEnquiry = await prisma.enquiry.update({
      where: { id },
      data: { status }
    });

    const { revalidatePath } = require("next/cache");
    revalidatePath(`/admin/leads/${id}`);
    revalidatePath(`/admin/leads`);
    revalidatePath(`/admin/dashboard`);
    revalidatePath(`/admin/companies`);

    return NextResponse.json({ success: true, enquiry: updatedEnquiry });
  } catch (error) {
    console.error("[UPDATE_STATUS]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
