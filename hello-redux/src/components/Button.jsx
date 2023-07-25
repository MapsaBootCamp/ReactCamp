import React from "react";

const darkButton = {
  color: "white",
  backgroundColor: "black",
};

const lightButton = {
  color: "black",
  backgroundColor: "blue",
};

export default function Button({ onClick, className, value, theme }) {
  return (
    <button
      style={theme === "dark" ? darkButton : lightButton}
      className={className}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
