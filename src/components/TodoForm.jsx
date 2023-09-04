import React, { useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const TodoForm = ({ addTask }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return alert("Invalid input !");
    addTask(todo);
    setTodo("");
  };
  // 1 o input phai co 2 thuoc tinh: value va onChange
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

TodoForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};
export default TodoForm;
