import React from "react";

const CategorySelection = ({ handleCategorySelection }) => {
  const handleChange = (event) => {
    handleCategorySelection(event.target.value);
  };

  return (
    <div>
      <h1 id="selectionTitle">ZOO QUIZ</h1>
      <label id="labelSelection">
        Select a category:
        <select onChange={handleChange} className="category-select">
          <option defaultChecked></option>
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
