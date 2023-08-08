"use server";

import { prisma } from "@/app/utils/db";
import { redirect } from "next/navigation";

export default async function createTodo(formData: FormData) {
  if (formData.get("title")) {
    await prisma.todo.create({ data: { title: formData.get("title") } });
  }
  redirect("/todos");
}
