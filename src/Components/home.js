import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TaskEditForm from "./TaskEditForm";
import Search from "./Search";
import TodoFilter from "./TodoFilter";
function Home() {
  const [allTodos, setAllTodos] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filterValue, setFilterValue] = useState("All");
  // save data in local storage
  useEffect(() => {
    if (allTodos.length === 0) return;
    localStorage.setItem("All Tasks", JSON.stringify(allTodos));
  }, [allTodos]);
  // populate allTodos when the app intially renders
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("All Tasks")) || [];
    setAllTodos(storageTodos);

    let initialFilteredTodos = [];
    switch (filterValue) {
      case "Completed":
        initialFilteredTodos = storageTodos.filter((todo) => todo.isCompleted);
        break;
      case "Uncompleted":
        initialFilteredTodos = storageTodos.filter((todo) => !todo.isCompleted);
        break;
      default:
        initialFilteredTodos = storageTodos;
    }
    setFilteredTodos(initialFilteredTodos);
  }, [filterValue]);

  const addTodo = (todo) => {
    setAllTodos((prevTodos) => [...prevTodos, todo]);
    setFilteredTodos((prevTodos) => [...prevTodos, todo]);
  };
  const toggleComplete = (id) => {
    setAllTodos(
      allTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      })
    );
    setFilteredTodos(
      filteredTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      })
    );
  };
  const removeTodo = (id) => {
    setAllTodos(allTodos.filter((todo) => todo.id !== id));
    setFilteredTodos(filteredTodos.filter((todo) => todo.id !== id));
  };
  const editTodo = (todo) => {
    setSelectedTask(todo);
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setSelectedTask(null);
    setIsEditing(false);
  };

  const updateTodo = (editedTodo) => {
    setAllTodos(
      allTodos.map((todo) => (todo.id === editedTodo.id ? editedTodo : todo))
    );
    setFilteredTodos(
      filteredTodos.map((todo) =>
        todo.id === editedTodo.id ? editedTodo : todo
      )
    );
    cancelEdit();
  };

  const handleSearch = (query) => {
    const results = filteredTodos.filter(
      (todo) =>
        todo.tittle.toLowerCase().includes(query.toLowerCase()) ||
        todo.body.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleIsSearched = (query) => {
    if (query.length !== 0) setIsSearched(true);
    else setIsSearched(false);
    console.log("isSearched", isSearched);
  };

  const handleFilterChange = (filterValue) => {
    setFilterValue(filterValue);
  };
  return (
    <div className="home">
      <TaskForm addTodo={addTodo} selectedTask={selectedTask} />
      <div className="add-taskForm"></div>
      <Search searchTasks={handleSearch} handleIsSearched={handleIsSearched} />
      <TodoFilter onFilterChange={handleFilterChange} />
      {isSearched && searchResults.length !== 0 ? (
        <TaskList
          allTodos={searchResults}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ) : isSearched && searchResults.length === 0 ? (
        <div className="taskless">No data found.</div>
      ) : allTodos.length === 0 ? (
        <div className="taskless">No Tasks Added yet.....</div>
      ) : (
        <TaskList
          allTodos={filteredTodos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      )}
      {isEditing && selectedTask && (
        <TaskEditForm
          task={selectedTask}
          updateTodo={updateTodo}
          cancelEdit={cancelEdit}
        />
      )}
    </div>
  );
}

export default Home;
