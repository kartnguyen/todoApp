import React, { useState } from "react";
import Button from "./Button";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return alert("Invalid input !");
    addTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        className="input-form"
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <Button variant="primary" content="Create" />
    </form>
  );
};

export default TodoForm;
