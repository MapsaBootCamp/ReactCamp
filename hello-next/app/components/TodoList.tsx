import TodoDetail from "@/app/components/TodoDetail";
import CreateTodo from "../components/CreateTodo";
import { Todo } from "@prisma/client";

type Prop = {
  todos: Todo[];
  createTodo: (formData: FormData) => void;
  toggleTodo: (id: number, status: boolean) => void;
};

export default function TodoList({ todos, createTodo, toggleTodo }: Prop) {
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold">ToDo App</h1>
        <CreateTodo createTodo={createTodo} />
      </div>
      <div className="mt-8">
        <ul>
          {todos.map((todo) => (
            <TodoDetail key={todo.id} todo={todo} toggleTodo={toggleTodo} />
          ))}
        </ul>
      </div>
    </>
  );
}
