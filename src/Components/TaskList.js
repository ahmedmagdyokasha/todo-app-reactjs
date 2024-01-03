import Task from "./Task";
import React from "react";
const TaskList = ({ allTodos, toggleComplete, removeTodo, editTodo }) => {
  return (
    <div className="taskList-container">
      <ul className="Task-List">
        {allTodos.map((todo) => (
          <Task
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
