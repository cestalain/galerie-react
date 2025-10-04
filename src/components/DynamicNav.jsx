// DynamicNav.jsx

import React from "react";
import "./DynamicNav.css";

// Le composant reçoit maintenant des props du parent
function DynamicNav({ categories, activeCategory, onCategoryChange }) {
  const formatName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <nav className="dynamic-nav">
      <ul className="nav-list">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`nav-item ${
              category === activeCategory ? "active" : ""
            }`}
            // MODIFICATION : Utilise la fonction de callback fournie par le parent
            onClick={() => onCategoryChange(category)}
          >
            {formatName(category)}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DynamicNav;
