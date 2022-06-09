import React from "react";

const Header = ({onDarkModeClick, isDarkMode}) => {
    function helper(e){
        e.target.textContent = (isDarkMode?"Dark Mode" : "Light Mode")
        onDarkModeClick()
    }
    return (
    <header>
        <h2>Shopster</h2>
        <button onClick={helper}>Dark Mode</button>
    </header>
    )
}

export default Header;