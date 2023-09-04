import React from "react";

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`} key={index}>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
