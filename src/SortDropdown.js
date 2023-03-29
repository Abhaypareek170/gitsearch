import React from "react";

function SortDropdown(props) {
  const { selectedSort, onSortChange } = props;

  const handleSortChange = (e) => {
    const sortOption = e.target.value;
    onSortChange(sortOption);
  };

  return (
    <div className="sort-dropdown">
      <label htmlFor="sort-select">Sort by:</label>
      <select id="sort-select" value={selectedSort} onChange={handleSortChange}>
        <option value="stars">Stars</option>
        <option value="watchers">Watchers</option>
        <option value="score">Score</option>
        <option value="name">Name</option>
        <option value="created">Created</option>
        <option value="updated">Updated</option>
      </select>
    </div>
  );
}

export default SortDropdown;
