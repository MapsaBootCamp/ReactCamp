import TodoDetail from "@/app/components/TodoDetail";
import { prisma } from "@/app/utils/db";
import { toggleTodo } from "../utils/todoCreate";
import { Metadata } from "next";
import CreateTodo from "../components/CreateTodo";
import createTodo from "@/app/actions/createTodo";
import Link from "next/link";
import TodoList from "../components/TodoList";

export const metadata: Metadata = {
  title: "todo list",
  description: "this page show all todo list",
};

export default async function TodoListPage() {
  const todos = await prisma.todo.findMany();

  return (
    <>
      <div className="w-full h-screen pt-8">
        <div className="bg-white p-3 max-w-md mx-auto">
            {/* <CreateTodo createTodo={createTodo} />
             */}

              <TodoList todos={todos} toggleTodo={toggleTodo} />

        </div>
      </div>
    </>
  );
}
