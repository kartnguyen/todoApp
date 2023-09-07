import "./App.css";
import FilterForm from "./components/FilterForm";
import TodoAction from "./components/TodoAction";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [editingTaskId, setEditingTaskId] = useState(null);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    if (confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };
  const editTask = (id) => {
    setEditingTaskId(id);
  };

  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  const filterTask = tasks.filter((task) =>
    filter === "all"
      ? true
      : filter === "completed"
      ? task.completed
      : !task.completed
  );
  const pendingTask = tasks.filter((task) => !task.completed).length;

  return (
    <>
      <div className="container">
        <h2 className="heading">Simple TodoApp</h2>
        <TodoForm addTask={addTask} />
        <div className="filter">
          <FilterForm
            value="all"
            label="All"
            checked={filter === "all"}
            onChange={handleFilter}
          />
          <FilterForm
            value="active"
            label="Active"
            checked={filter === "active"}
            onChange={handleFilter}
          />
          <FilterForm
            value="completed"
            label="Completed"
            checked={filter === "completed"}
            onChange={handleFilter}
          />
        </div>
        <TodoList
          task={filterTask}
          deleteTask={deleteTask}
          onToggle={toggleComplete}
          editTask={editTask}
        />
        <TodoAction
          setTodoList={setTasks}
          todoList={tasks}
          pendingTask={pendingTask}
        />
      </div>
    </>
  );
}

export default App;
