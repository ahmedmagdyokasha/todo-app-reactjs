import { useState, useEffect } from "react";

const TaskEditForm = ({ task, updateTodo, cancelEdit }) => {
  const [editedTask, setEditedTask] = useState({ ...task });

  useEffect(() => {
    setEditedTask({ ...task });
  }, [task]);

  const handleEditTodoTittle = (e) => {
    setEditedTask({ ...editedTask, tittle: e.target.value });
  };

  const handleEditTodoBody = (e) => {
    setEditedTask({ ...editedTask, body: e.target.value });
  };

  const handleEditTodoDate = (e) => {
    setEditedTask({ ...editedTask, date: e.target.value });
  };

  const handleEditTodoCategory = (e) => {
    setEditedTask({ ...editedTask, category: e.target.value });
  };

  const handleEditTodoPriorityLevel = (e) => {
    setEditedTask({ ...editedTask, priorityLevel: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo(editedTask);
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <legend>Edit Yout Task </legend>
      <div className="form-bottom">
        <input
          className="task-tittle"
          type="text"
          placeholder="Enter the task tittle"
          value={editedTask.tittle}
          onChange={handleEditTodoTittle}
        />

        <textarea
          className="task-content"
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Task details"
          value={editedTask.body}
          onChange={handleEditTodoBody}
        ></textarea>
        <input
          className="due-date"
          type="datetime-local"
          placeholder="Duedate"
          value={editedTask.date}
          onChange={handleEditTodoDate}
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
              checked={editedTask.category === "Work"}
              onChange={handleEditTodoCategory}
            />
            <label htmlFor="work-category">Work</label>

            <input
              className="input-tag"
              type="radio"
              id="home-category"
              name="category"
              value="Home"
              checked={editedTask.category === "Home"}
              onChange={handleEditTodoCategory}
            />
            <label htmlFor="home-category">Home</label>

            <input
              className="input-tag"
              type="radio"
              id="entertainment-category"
              name="category"
              value="Entertainment"
              checked={editedTask.category === "Entertainment"}
              onChange={handleEditTodoCategory}
            />
            <label htmlFor="entertainment-category">Entertainment</label>
            <input
              className="input-tag"
              type="radio"
              id="other-category"
              name="category"
              value="Other"
              checked={editedTask.category === "Other"}
              onChange={handleEditTodoCategory}
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
              checked={editedTask.priorityLevel === "High"}
              onChange={handleEditTodoPriorityLevel}
            />
            <label htmlFor="high-priority">High</label>

            <input
              className="input-level"
              type="radio"
              id="medium-priority"
              name="Priority"
              value="Medium"
              checked={editedTask.priorityLevel === "Medium"}
              onChange={handleEditTodoPriorityLevel}
            />
            <label htmlFor="medium-priority">Medium</label>

            <input
              className="input-level"
              type="radio"
              id="low-priority"
              name="Priority"
              value="Low"
              checked={editedTask.priorityLevel === "Low"}
              onChange={handleEditTodoPriorityLevel}
            />
            <label htmlFor="low-priority">Low</label>
          </div>
        </fieldset>
        <button className="add-task-btn" type="submit">
          Update Task
        </button>
        <button className="add-task-btn" type="button" onClick={cancelEdit}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TaskEditForm;
