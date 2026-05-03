"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createBlogPost(formData: FormData) {
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const excerpt = formData.get("excerpt") as string;
  const content = formData.get("content") as string;
  const published = formData.get("published") === "on";

  if (!title || !slug || !content) {
    throw new Error("Missing required fields");
  }

  try {
    await prisma.blogPost.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        published,
      },
    });
  } catch (error) {
    console.error("Failed to create blog post:", error);
    return { error: "Failed to create blog post" };
  }

  revalidatePath("/admin/blogs");
  revalidatePath("/blog");
  redirect("/admin/blogs");
}
