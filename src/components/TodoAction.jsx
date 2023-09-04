import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

/**
 * @typedef TodoActionComponent - Trien khai hanh dong xoa toan bo task
 *
 * @returns
 */

/**
 * @param {React.Function} setTodoList - Ham cap nhat gia tri task
 * @param {React.Array} todoList - Mang cac task hien co
 */

const TodoAction = ({ setTodoList, todoList, pendingTask }) => {
  const handleDeleteAll = () => {
    if (confirm("Do you want to delete all the tasks?")) {
      setTodoList([]);
    }
  };
  const todoListLength = todoList.length;

  return (
    <div className="todo_action">
      {todoListLength > 0 ? (
        <>
          <p>
            You have <b style={{ color: "red" }}>{pendingTask}</b> pennding task
            !
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

TodoAction.propTypes = {
  setTodoList: PropTypes.func.isRequired,
  todoList: PropTypes.array.isRequired,
};
export default TodoAction;
