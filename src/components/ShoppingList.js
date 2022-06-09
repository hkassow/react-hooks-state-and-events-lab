import React from "react";
import Item from "./Item";
import Filter from "./Filter";
import { useState } from "react";

function ShoppingList({ items }) {
  let [filter, setFilter] = useState('')
  const onCatergoryChange = (value) => setFilter(value)
  return (
    <div className="ShoppingList">
      <Filter filter={filter} onCategoryChange={onCatergoryChange} />
      <ul className="Items">
        {items.filter(item => item.category.includes(filter)).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
