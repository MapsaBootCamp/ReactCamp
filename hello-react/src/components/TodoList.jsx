import React, { useState, useRef, useEffect } from 'react';
import Todo from './Todo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: 'reading JS book',
      done: false,
      dueDate: Date.now(),
    },
    {
      id: 2,
      name: 'coding JS project',
      done: true,
      dueDate: Date.now(),
    },
  ]); /// Hooks
  const [filterFlag, setFilterFlag] = useState('ALL');

  let newTodo = useRef(null);

  useEffect(() => {
    newTodo.current.focus();
  }, []);

  function filteredData() {
    switch (filterFlag) {
      case 'ALL':
        return todos;
      case 'DONE':
        return todos.filter((todo) => todo.done);
      case 'UNDONE':
        return todos.filter((todo) => !todo.done);
      default:
        break;
    }
  }
  const addNewTodoHandler = (e) => {
    const newTodoVal = newTodo.current.value;
    if (newTodoVal) {
      setTodos((todos) => [
        ...todos,
        {
          id: todos.length + 1,
          name: newTodoVal,
          dueDate: Date.now(),
          done: false,
        },
      ]);
    }
    newTodo.current.value = null;
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const editTodo = (todoId, newName) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, name: newName } : todo
      )
    );
  };

  function toggleDoneTodo(todoId) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  return (
    <>
      <input
        type="text"
        ref={newTodo}
        placeholder="Todo title"
        name="newTodo"
        onKeyDown={(e) => (e.key === 'Enter' ? addNewTodoHandler(e) : null)}
      />
      <button onClick={addNewTodoHandler} style={{ marginLeft: '20px' }}>
        +AddTodo
      </button>
      <select onChange={(e) => setFilterFlag(e.target.value)}>
        <option value="ALL">ALL</option>
        <option value="DONE">Done</option>
        <option value="UNDONE">UnDone</option>
      </select>
      {filteredData(todos).map((todo) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Todo
            key={todo.id}
            todo={todo}
            editTodo={editTodo}
            removeTodo={removeTodo}
            toggleDoneTodo={toggleDoneTodo}
          />
        </div>
      ))}
    </>
  );
}
