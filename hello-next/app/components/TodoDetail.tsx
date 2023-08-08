"use client";

import { Todo } from "@prisma/client";
import Link from "next/link";
import React, { useState } from "react";

export default function TodoDetail({
  todo,
  toggleTodo,
  handleRemove,
}: {
  todo: Todo;
  toggleTodo: any;
  handleRemove: (id: number) => void;
}) {
  const handleToggleTodo = async (e: any, todoId: any) => {
    const data = await toggleTodo(todoId, !e.target.checked);
  };

  const contents = (
    <li className="rounded-lg">
      <div className="flex align-middle items-center flex-row justify-between">
        <div className="flex gap-2">
          <input
            id={String(todo.id)}
            type="checkbox"
            className="cursor-pointer peer h-6 w-6 "
            defaultChecked={todo.isDone}
            onChange={(e) => handleToggleTodo(e, todo.id)}
          />
          <label
            htmlFor={String(todo.id)}
            className="cursor-pointer peer-checked:line-through peer-checked:text-slate-200"
          >
            {todo.title}
          </label>
        </div>
        <div className="flex gap-1">
          <Link
            href={`/todos/${todo.id}`}
            className="flex text-blue-500 border-2 items-center gap-1 border-blue-500 p-2  hover:text-white hover:bg-blue-500 rounded-lg"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 30"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="9" y1="12" x2="9" y2="20" />{" "}
              <line x1="9" y1="20" x2="20" y2="9" />
            </svg>
            <span className="text-sm">Edit</span>
          </Link>
          <button
            onClick={() => handleRemove(todo.id)}
            className="text-sm flex text-red-500 items-center gap-1 border-2 border-red-500 p-2 hover:text-white hover:bg-red-500 rounded-lg"
          >
            <svg
              className="h-4 w-4"
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
      </div>
      <hr className="mt-2" />
    </li>
  );
  return <>{contents}</>;
}
