import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TaskForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    tittle: "",
    body: "",
    date: "",
    category: "",
    priorityLevel: "",
    isCompleted: false,
  });
  const handleTodoTittle = (e) => {
    setTodo({ ...todo, tittle: e.target.value });
  };
  const handleTodobody = (e) => {
    setTodo({ ...todo, body: e.target.value });
  };
  const handleDateChange = (e) => {
    setTodo({ ...todo, date: e.target.value });
  };
  const handleCategoryChange = (e) => {
    setTodo({ ...todo, category: e.target.value });
  };
  const handlePriorityChange = (e) => {
    setTodo({ ...todo, priorityLevel: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.tittle.trim()) {
      const newTodo = {
        id: uuidv4(),
        tittle: "",
        body: "",
        date: "",
        category: "",
        priorityLevel: "",
        isCompleted: false,
      };
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, ...newTodo });
    }
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <legend>Get your task in progress: </legend>
      <div className="form-bottom">
        <input
          className="task-tittle"
          type="text"
          placeholder="Enter the task tittle"
          value={todo.tittle}
          onChange={handleTodoTittle}
          required
        />

        <textarea
          className="task-content"
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Task details"
          value={todo.body}
          onChange={handleTodobody}
        ></textarea>
        <input
          className="due-date"
          type="datetime-local"
          placeholder="Duedate"
          value={todo.date}
          onChange={handleDateChange}
        />

        <fieldset>
          <legend>Please select task category:</legend>
          <div className="category">
            <input
              className="input-tag"
              type="radio"
              id="work-category"
              name="category"
              value="Work"
              checked={todo.category === "Work"}
              onChange={handleCategoryChange}
            />
            <label htmlFor="work-category">Work</label>

            <input
              className="input-tag"
              type="radio"
              id="home-category"
              name="category"
              value="Home"
              checked={todo.category === "Home"}
              onChange={handleCategoryChange}
            />
            <label htmlFor="home-category">Home</label>

            <input
              className="input-tag"
              type="radio"
              id="entertainment-category"
              name="category"
              value="Entertainment"
              checked={todo.category === "Entertainment"}
              onChange={handleCategoryChange}
            />
            <label htmlFor="entertainment-category">Entertainment</label>
            <input
              className="input-tag"
              type="radio"
              id="other-category"
              name="category"
              value="Other"
              checked={todo.category === "Other"}
              onChange={handleCategoryChange}
            />
            <label htmlFor="other-category">Other</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Please check the level of Priority:</legend>
          <div className="Priority-levels">
            <input
              className="input-level"
              type="radio"
              id="high-priority"
              name="Priority"
              value="High"
              checked={todo.priorityLevel === "High"}
              onChange={handlePriorityChange}
            />
            <label htmlFor="high-priority">High</label>

            <input
              className="input-level"
              type="radio"
              id="medium-priority"
              name="Priority"
              value="Medium"
              checked={todo.priorityLevel === "Medium"}
              onChange={handlePriorityChange}
            />
            <label htmlFor="medium-priority">Medium</label>

            <input
              className="input-level"
              type="radio"
              id="low-priority"
              name="Priority"
              value="Low"
              checked={todo.priorityLevel === "Low"}
              onChange={handlePriorityChange}
            />
            <label htmlFor="low-priority">Low</label>
          </div>
        </fieldset>
        <button className="add-task-btn" type="submit">
          ADD New Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
