import React from "react";
import Button from "./Button";

/**
 * @typedef TodoItem
 *
 * @property {string} todo - Ten cua task
 * @property {string} state - Trang thai cua task
 */

/**
 * @param {TodoItem} props
 */
const TodoItem = ({ deleteTodo, todo, index }) => {
  const handleStateChange = () => {};
  return (
    <div className="item" key={index}>
      <label htmlFor={index}>
        <input type="checkbox" id={index} onChange={handleStateChange} />
        {todo.text}
      </label>
      <Button
        variant="danger"
        content="Delete"
        onClick={() => deleteTodo(index)}
      />
    </div>
  );
};

export default TodoItem;
