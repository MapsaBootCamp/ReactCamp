import React from "react";

export default function Todo({ todo }) {
  return (
    <div className="Todo">
      <p>{todo}</p>

      {/* <p>
        <span>{todo.status}</span>
      </p> */}
    </div>
  );
}
