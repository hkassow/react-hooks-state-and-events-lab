import React from "react";

const Filter = ({onCategoryChange}) => {
    return (
    <div className="Filter">
      <select onChange={e => (onCategoryChange(e.target.value))} name="filter">
        <option value="">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div> )
}

export default Filter