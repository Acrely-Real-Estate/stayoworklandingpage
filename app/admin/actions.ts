"use server";

import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

// Ensure local-dev admin exists for foreign key constraints if bypassing
async function ensureAuthorExists(id: string) {
  if (id === "local-dev") {
    await prisma.admin.upsert({
      where: { id: "local-dev" },
      update: {},
      create: {
        id: "local-dev",
        email: "dev@localhost",
        name: "Local Developer",
        password: "mock-password-not-used",
      }
    });
  }
}

export async function addLeadNote(enquiryId: string, content: string) {
  const session = await getSession();
  if (!session) {
    throw new Error("Unauthorized");
  }

  if (!content || content.trim().length === 0) {
    throw new Error("Note content cannot be empty");
  }

  await ensureAuthorExists(session.admin.id);

  await prisma.leadNote.create({
    data: {
      content: content.trim(),
      enquiryId,
      authorId: session.admin.id,
    }
  });

  revalidatePath(`/admin/leads/${enquiryId}`);
  return { success: true };
}

export async function setFollowUpDate(enquiryId: string, date: string | null) {
  const session = await getSession();
  if (!session) {
    throw new Error("Unauthorized");
  }

  await prisma.enquiry.update({
    where: { id: enquiryId },
    data: { nextFollowUpDate: date ? new Date(date) : null }
  });

  revalidatePath(`/admin/leads/${enquiryId}`);
  revalidatePath(`/admin/dashboard`);
  revalidatePath(`/admin/leads`);
  return { success: true };
}
