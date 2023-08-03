import { PrismaClient, Todo } from "@prisma/client";
const prisma = new PrismaClient();

export async function toggleTodo(todoId: any, status: boolean) {
  "use server";

  return await prisma.todo.update({
    where: { id: todoId },
    data: { isDone: !status },
  });
}
