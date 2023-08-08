"use server";

import { prisma } from "@/app/utils/db";
import { redirect } from "next/navigation";

export default async function createTodo(title: string) {
  return await prisma.todo.create({ data: { title } });
}
