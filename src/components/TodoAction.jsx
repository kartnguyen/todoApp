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
      {todoListLength > 0 ? (
        <>
          <p>
            You have <b style={{ color: "red" }}>{todoListLength}</b> pennding
            task !
          </p>
          <Button
            variant="danger"
            content="Clear All"
            onClick={handleDeleteAll}
          />
        </>
      ) : (
        <p style={{ margin: "0 auto", color: "red", fontWeight: 600 }}>
          NOTHING TO SHOW
        </p>
      )}
    </div>
  );
};

export default TodoAction;
