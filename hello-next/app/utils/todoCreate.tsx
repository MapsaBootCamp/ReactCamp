import { prisma } from "@/app/utils/db";

export async function toggleTodo(todoId: any, status: boolean) {
  "use server";

  return await prisma.todo.update({
    where: { id: todoId },
    data: { isDone: !status },
  });
}
