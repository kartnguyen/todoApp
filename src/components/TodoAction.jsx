import React from "react";
import Button from "./Button";

const TodoAction = ({ setTodoList, todoList }) => {
  const handleDeleteAll = () => {
    if (todoList.length > 0) {
      if (confirm("Do you want to delete all the tasks?")) {
        setTodoList([]);
      }
    }
  };
  const todoListLength = todoList.length;

  return (
    <div className="todo_action">
      <p>
        You have <b style={{ color: "red" }}>{todoListLength}</b> pennding task
        !
      </p>
      <Button variant="danger" content="Clear All" onClick={handleDeleteAll} />
    </div>
  );
};

export default TodoAction;
