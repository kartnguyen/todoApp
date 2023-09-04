import "./App.css";
import FilterForm from "./components/FilterForm";
import TodoAction from "./components/TodoAction";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (title) => {
    const newTask = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (id) => {
    if (confirm("Are you sure you want to delete this task?")) {
      // setTasks(tasks.filter((task) => task.id !== id));
      const newTodo = [...tasks];
      newTodo.splice(id, 1);
      setTasks(newTodo);
    }
  };
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
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
        {/* <div className="todo_list">
          {tasks.map((todo, id) => (
            <TodoList key={id} id={id} todo={todo} deleteTask={deleteTask} />
          ))}
        </div> */}
        <TodoList
          task={filterTask}
          deleteTask={deleteTask}
          onToggle={toggleComplete}
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
