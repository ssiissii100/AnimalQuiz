import React from "react";

const CategorySelection = ({ handleCategorySelection }) => {
  const handleChange = (event) => {
    handleCategorySelection(event.target.value);
  };

  return (
    <div>
      <label>
        Select a category:
        <select onChange={handleChange}>
          <option value="weight">Weight</option>
          <option value="length">Length</option>
          <option value="speed">Speed</option>
          <option value="lifespan">Lifespan</option>
          <option value="height">Height</option>
        </select>
      </label>
    </div>
  );
};

export default CategorySelection;
