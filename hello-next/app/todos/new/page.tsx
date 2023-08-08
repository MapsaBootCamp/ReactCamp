"use client";
import createTodo from "@/app/actions/createTodo";

import Link from "next/link";

export default function CreateTodoPage() {
  return (
    <div className="mx-auto flex justify-center">
      <form action={createTodo} className="mt-4 flex-row">
        <div>
          <input
            className="w-80 p-2 mb-2 h-10 border border-gray-500 text-black"
            type="text"
            name="title"
            placeholder="Enter your task here"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
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
          <Link
            href="/todos"
            className="ml-2 border-2 border-gray-500 p-2 text-gray-500 hover:text-white hover:bg-gray-500 rounded-lg flex"
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
              <line x1="9" y1="9" x2="15" y2="15" />{" "}
              <line x1="9" y1="15" x2="15" y2="9" />
            </svg>
            <span>Cancel</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
