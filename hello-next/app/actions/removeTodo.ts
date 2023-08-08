"use server";

import { prisma } from "@/app/utils/db";
import { redirect } from "next/navigation";

export default async function removeTodo(id: number) {
  await prisma.todo.delete({ where: { id } });
}
