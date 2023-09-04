import React, { useState } from "react";
import TodoItem from "./TodoItem";

// const TodoList = ({ id, todo, deleteTask }) => {
//   return <TodoItem key={id} id={id} todo={todo} deleteTask={deleteTask} />;
// };

const TodoList = ({ task, deleteTask, onToggle }) => {
  return (
    <div className="todo_list">
      {task.map((item, index) => (
        <TodoItem
          key={index}
          id={index}
          todo={item}
          deleteTask={deleteTask}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};
export default TodoList;
