import React, { useState } from "react";
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
const TodoItem = ({ deleteTask, todo, id, onToggle, editTask }) => {
  const [editing, setEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);
  const [valueHistory, setValueHistory] = useState([]);

  const handleCheckboxChange = () => {
    onToggle(id);
  };
  const handleInputChange = (e) => {
    setUpdatedTitle(e.target.value);
  };

  const handleEditClick = () => {
    setEditing(true);
  };
  const handleSaveClick = () => {
    setEditing(false);
    editTask(id, updatedTitle);
    setValueHistory(updatedTitle);
  };

  const handleCancelClick = () => {
    setEditing(false);
    setUpdatedTitle(valueHistory);
  };
  return (
    <div className="item" key={id}>
      <div className="label">
        <input
          type="checkbox"
          id={id}
          onChange={handleCheckboxChange}
          checked={todo.completed}
        />
        <div key={id} className="edit-container">
          {editing ? (
            <>
              <input
                type="text"
                value={updatedTitle}
                onChange={handleInputChange}
              />
              <div>
                <Button
                  variant="primary"
                  content="Save"
                  onClick={handleSaveClick}
                />
                <Button
                  variant="danger"
                  content="Cancel"
                  onClick={handleCancelClick}
                />
              </div>
            </>
          ) : (
            updatedTitle
          )}
        </div>
      </div>
      {!editing && (
        <div className="button-item">
          <Button variant="primary" content="Edit" onClick={handleEditClick} />
          <Button
            variant="danger"
            content="Delete"
            onClick={() => deleteTask(id)}
          />
        </div>
      )}
    </div>
  );
};

TodoItem.propTypes = {
  deleteTask: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  onToggle: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};
export default TodoItem;
