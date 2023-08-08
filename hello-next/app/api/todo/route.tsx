import { NextResponse } from "next/server";
import { prisma } from "@/app/utils/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const todo = await prisma.todo.findUnique({
    where: { id: Number(searchParams.get("id")) },
  });

  return NextResponse.json({
    todo,
  });
}
