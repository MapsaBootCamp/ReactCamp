"use client";

import { Todo } from "@prisma/client";
import { log } from "console";
import React, { useState } from "react";

export default function TodoDetail({
  todo,
  toggleTodo,
}: {
  todo: Todo;
  toggleTodo: any;
}) {
  const [flag, setFlag] = useState(false);

  const handleToggleTodo = async (e: any, todoId: any, status: boolean) => {
    const data = await toggleTodo(todoId, status);
    console.log(data);
    setFlag(!flag);
  };

  const contents = (
    <li key={todo.id} className="p-2 rounded-lg">
      <div className="flex align-middle flex-row justify-between">
        <div className="p-2">
          <input
            type="checkbox"
            className="h-6 w-6 "
            value={todo.isDone ? "true" : "false"}
            checked={todo.isDone}
            onChange={(e) => handleToggleTodo(e, todo.id, todo.isDone)}
          />
        </div>
        <div className="p-2">
          <p
            className={`text-lg ${
              todo.isDone ? "line-through  text-gray-400" : " text-gray-800"
            }`}
          >
            {todo.title}
          </p>
        </div>
        <button className="flex text-red-500 border-2 border-red-500 p-2 rounded-lg">
          <svg
            className="h-6 w-6 text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" />{" "}
            <line x1="15" y1="9" x2="9" y2="15" />{" "}
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
          <span>Remove</span>
        </button>
      </div>
      <hr className="mt-2" />
    </li>
  );
  return <>{contents}</>;
}
