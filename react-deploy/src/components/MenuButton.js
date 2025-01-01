import React from "react";
import "./MenuButton.css";

const MenuButton = ({ text, onClick, isActive }) => {
  return (
    <button
      className={`underline-button ${isActive ? "highlighted" : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MenuButton;
