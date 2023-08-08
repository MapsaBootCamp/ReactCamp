"use client";

import TodoDetail from "@/app/components/TodoDetail";
import { Todo } from "@prisma/client";
import { useState } from "react";
import removeTodo from "@/app/actions/removeTodo";
import createTodo from "../actions/createTodo";

type Prop = {
  todos: Todo[];
  toggleTodo: (id: number, status: boolean) => void;
};

export default function TodoList({ todos, toggleTodo }: Prop) {
  const [data, setData] = useState(todos);
  const [inputData, setInputData] = useState("");

  const handleRemove = async (id: number) => {
    await removeTodo(id);
    setData((data) => data.filter((todo) => todo.id !== id));
  };

  const hadleCreate = async () => {
    const newTodo = await createTodo(inputData);
    setData((data) => [...data, newTodo]);
    setInputData("");
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold">ToDo App</h1>
        <div className="flex justify-between">
          <input
            className="w-80 p-2 mb-2 h-10 border border-gray-500 text-black"
            type="text"
            name="title"
            value={inputData}
            placeholder="Enter your task here"
            onChange={(e) => setInputData(e.target.value)}
          />
          <button
            onClick={() => hadleCreate()}
            className="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex"
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
            <span>Add</span>
          </button>
        </div>
      </div>
      <div className="mt-8">
        <ul>
          {data.map((todo) => (
            <TodoDetail
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              handleRemove={handleRemove}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
