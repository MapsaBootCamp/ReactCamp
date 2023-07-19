import React, { useState, useRef, useEffect } from "react";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([]); /// Hooks
  const [selectedTodoForEdit, setSelectedTodoForEdit] = useState(null);
  // const [newTodo, setNewTodo] = useState(null);

  let newTodo = useRef(null);

  useEffect(() => {
    newTodo.current.focus();
  });

  // const addNewTodoHandler = (e) => {
  //   e.preventDefault();
  //   const newTodos = e.target.newTodo.value;
  //   setTodos((todos) => [...todos, newTodos]);
  //   e.target.newTodo.value = null;
  // };

  const addNewTodoHandler = (e) => {
    const newTodoVal = newTodo.current.value;
    if (newTodoVal) {
      setTodos((todos) => [...todos, newTodoVal]);
    }
    newTodo.current.value = null;
  };

  const removeTodo = (index) => {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
    setSelectedTodoForEdit(null);
  };

  const editTodo = (index) => {
    setSelectedTodoForEdit(index);
  };

  const editTodoComplete = (e, index) => {
    if (e.key === "Enter") {
      todos[index] = e.target.value;
      setTodos(todos);
      setSelectedTodoForEdit(null);
    }
  };

  return (
    <>
      {/* <form action="" onSubmit={addNewTodoHandler}>
        <input type="text" placeholder="Todo title" name="newTodo" />
        <button type="submit">+AddTodo</button>
      </form> */}
      <input
        type="text"
        ref={newTodo}
        placeholder="Todo title"
        name="newTodo"
        onKeyDown={(e) => (e.key === "Enter" ? addNewTodoHandler(e) : null)}
      />
      <button onClick={addNewTodoHandler} style={{ marginLeft: "20px" }}>
        +AddTodo
      </button>
      {todos.map((todo, indx) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {selectedTodoForEdit !== indx ? (
            <>
              <Todo todo={todo} key={indx} />
              <button
                style={{
                  height: "40%",
                  marginLeft: "30px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                }}
                onClick={(e) => editTodo(indx)}
              >
                Edit
              </button>
            </>
          ) : (
            <input
              type="text"
              placeholder={todo}
              onKeyDown={(e) => editTodoComplete(e, indx)}
            />
          )}

          <button
            style={{
              height: "40%",
              marginLeft: "30px",
              backgroundColor: "red",
              color: "white",
              border: "none",
            }}
            onClick={(e) => removeTodo(indx)}
          >
            -
          </button>
        </div>
      ))}
    </>
  );
}
