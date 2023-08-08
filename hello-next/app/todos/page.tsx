import TodoDetail from "@/app/components/TodoDetail";
import { prisma } from "@/app/utils/db";
import { toggleTodo } from "../utils/todoCreate";
import { Metadata } from "next";
import CreateTodo from "../components/CreateTodo";
import createTodo from "@/app/actions/createTodo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "todo list",
  description: "this page show all todo list",
};

export default async function TodoList() {
  const todos = await prisma.todo.findMany();

  return (
    <>
      <div className="w-full h-screen pt-8">
        <div className="bg-white p-3 max-w-md mx-auto">
          <div className="text-center">
            {/* <CreateTodo createTodo={createTodo} />
             */}
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold">ToDo App</h1>
              <Link
                href="/todos/new"
                className="ml-2 border-2 w-1/3 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex"
              >
                <svg
                  className="h-6 w-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <circle cx="12" cy="12" r="9" />{" "}
                  <line x1="9" y1="12" x2="15" y2="12" />{" "}
                  <line x1="12" y1="9" x2="12" y2="15" />
                </svg>
                <span className="ml-2">New Todo</span>
              </Link>
            </div>
          </div>
          <div className="mt-8">
            <ul>
              {todos.map((todo) => (
                <TodoDetail key={todo.id} todo={todo} toggleTodo={toggleTodo} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
