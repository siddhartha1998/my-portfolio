"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProject(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const techString = formData.get("tech") as string;
  const github = formData.get("github") as string;
  const demo = formData.get("demo") as string;

  if (!title || !description) {
    throw new Error("Missing required fields");
  }

  const tech = techString.split(",").map(s => s.trim()).filter(s => s !== "");

  try {
    await prisma.project.create({
      data: {
        title,
        description,
        tech,
        github,
        demo,
      },
    });
  } catch (error) {
    console.error("Failed to create project:", error);
    throw new Error("Failed to create project");
  }

  revalidatePath("/admin/projects");
  revalidatePath("/");
  redirect("/admin/projects");
}
