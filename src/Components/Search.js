import React, { useState } from "react";

const Search = ({ searchTasks, handleIsSearched }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    searchTasks(query);
    handleIsSearched(query);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
