const TodoFilter = ({ onFilterChange }) => {
  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    onFilterChange(selectedFilter);
  };

  return (
    <select
      name="filter-tasks"
      id="filter-tasks"
      defaultValue="All"
      onChange={handleFilterChange}
    >
      <option value="All">All</option>
      <option value="Completed">Completed</option>
      <option value="Uncompleted">Uncompleted</option>
    </select>
  );
};

export default TodoFilter;
