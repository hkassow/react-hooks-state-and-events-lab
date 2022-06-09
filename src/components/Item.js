import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  let [isInCart, setInCart] = useState(false)
  const helperClick = (e) =>{
    if (!isInCart){
      setInCart(!isInCart)
      e.target.parentNode.className = 'in-cart'
      e.target.textContent = 'Remove From Cart'
    }
    else {
      setInCart(!isInCart)
      e.target.parentNode.className = ''
      e.target.textContent = 'Add to Cart'
    }
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={helperClick} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
