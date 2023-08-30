import "./App.css";
import FilterForm from "./components/FilterForm";
import TodoAction from "./components/TodoAction";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    const newTodo = [...todoList, { text, state: "active" }];
    setTodoList(newTodo);
  };

  const deleteTodo = (index) => {
    if (confirm("Are you sure you want to delete this task?")) {
      const newTodo = [...todoList];
      newTodo.splice(index, 1);
      setTodoList(newTodo);
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTodoList = todoList.filter((todo) => {
    if (filter === "active") {
      return todo.state === "active";
    } else if (filter === "completed") {
      return todo.state === "completed";
    }
    return true;
  });

  return (
    <>
      <div className="container">
        <h2 className="heading">Simple TodoApp</h2>
        <TodoForm addTodo={addTodo} />
        <div className="filter">
          <FilterForm
            value="all"
            label="All"
            checked={filter === "all"}
            onChange={() => handleFilterChange("all")}
          />
          <FilterForm
            value="active"
            label="Active"
            checked={filter === "active"}
            onChange={() => handleFilterChange("active")}
          />
          <FilterForm
            value="completed"
            label="Completed"
            checked={filter === "completed"}
            onChange={() => handleFilterChange("completed")}
          />
        </div>
        <div className="todo_list">
          {filteredTodoList.map((todo, index) => (
            <TodoList
              key={index}
              index={index}
              todo={todo}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
        <TodoAction setTodoList={setTodoList} todoList={todoList} />
      </div>
    </>
  );
}

export default App;
