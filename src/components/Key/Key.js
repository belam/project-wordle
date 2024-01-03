import React from "react";

function Key({ status, handleVirtualKeyClick, children }) {
  return (
    <button
      className={`key ${status}`}
      onClick={() => handleVirtualKeyClick(children)}
    >
      {children}
    </button>
  );
}

export default Key;
