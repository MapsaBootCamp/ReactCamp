import React, { useState } from 'react';
import styles from './Todo.module.css';

export default function Todo({ todo, editTodo, removeTodo, toggleDoneTodo }) {
  const [newName, setNewName] = useState(todo.name);
  const [editFlag, setEditFlag] = useState(false);

  function handleCompleteEdit() {
    setEditFlag(false);
    editTodo(todo.id, newName);
  }

  function handleEditClick() {
    setEditFlag(true);
  }

  return (
    <>
      {editFlag ? (
        <>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <span
            style={{ fontSize: '40px', color: 'green', cursor: 'pointer' }}
            onClick={handleCompleteEdit}
          >
            ✓
          </span>
        </>
      ) : (
        <>
          <span>{`(taskId ${todo.id}).`}&nbsp;</span>
          <p style={{ textDecoration: todo.done ? 'line-through' : '' }}>
            {todo.name}
          </p>
          <input
            type="checkbox"
            onChange={() => toggleDoneTodo(todo.id)}
            checked={todo.done}
          />
          <button className={styles.buttonEdit} onClick={handleEditClick}>
            Edit
          </button>

          <button
            className={styles.buttonDelete}
            onClick={(e) => removeTodo(todo.id)}
          >
            X
          </button>
        </>
      )}
    </>
  );
}
