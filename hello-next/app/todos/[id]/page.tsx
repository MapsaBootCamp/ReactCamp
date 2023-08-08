import React from "react";
import { prisma } from "@/app/utils/db";
import { notFound } from "next/navigation";

export default async function TodoDetail({
  params,
}: {
  params: { id: number };
}) {
  const todo = await prisma.todo.findFirst({
    where: { id: Number(params.id) },
  });
  if (!todo) {
    notFound();
  }
  return <div>TodoDetail {todo.title}</div>;
}
