import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ index, todo, deleteTodo }) => {
  return (
    <TodoItem key={index} index={index} todo={todo} deleteTodo={deleteTodo} />
  );
};

export default TodoList;
