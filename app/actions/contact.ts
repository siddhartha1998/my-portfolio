"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function sendContactMessage(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const rawMessage = formData.get("message") as string;

  if (!name || !email || !rawMessage) {
    throw new Error("Missing required fields");
  }

  const message = subject ? `Subject: ${subject}\n\n${rawMessage}` : rawMessage;

  try {
    await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    revalidatePath("/admin/messages");
    return { success: true };
  } catch (error) {
    console.error("Failed to send message:", error);
    return { success: false, error: "Internal server error" };
  }
}
