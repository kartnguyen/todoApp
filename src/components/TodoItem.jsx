import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

/**
 * @typedef TodoItem
 *
 * @property {object} todo - Ten cua task
 * @property {string} state - Trang thai cua task
 * @property {Function} deleteTask - Xoa 1 task
 */

/**
 * @param {TodoItem} props
 */
const TodoItem = ({ deleteTask, todo, id, onToggle }) => {
  return (
    <div className="item" key={id}>
      <label htmlFor={id}>
        <input key={id} type="checkbox" id={id} onChange={() => onToggle(id)} />
        {todo.title}
      </label>
      <Button
        variant="danger"
        content="Delete"
        onClick={() => deleteTask(id)}
      />
    </div>
  );
};

// TodoItem.propTypes = {
//   deleteTask: PropTypes.func.isRequired,
//   todo: PropTypes.object.isRequired,
//   id: PropTypes.string.isRequired,
// };
export default TodoItem;
