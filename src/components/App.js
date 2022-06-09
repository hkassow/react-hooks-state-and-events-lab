import React from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  let [isDarkMode, setDarkMode] = useState(false)
  const appClass = isDarkMode ? "App dark" : "App light"
  const onDarkModeClick = () => {
    setDarkMode(!isDarkMode)
  }
  return (
    <div className={appClass}>
      <Header isDarkMode={isDarkMode} onDarkModeClick = {onDarkModeClick} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
