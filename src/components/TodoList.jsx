import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ task, deleteTask, onToggle, editTask }) => {
  return (
    <div className="todo_list">
      {task.map((item, index) => (
        <TodoItem
          key={item.id}
          id={item.id}
          todo={item}
          deleteTask={deleteTask}
          onToggle={onToggle}
          editTask={editTask}
        />
      ))}
    </div>
  );
};
export default TodoList;
