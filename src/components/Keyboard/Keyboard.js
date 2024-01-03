import React from "react";

import Key from "../Key";

function Keyboard({ handleVirtualKeyClick, history }) {
  const firstRow = "QWERTYUIOP".split("");
  const secondRow = "ASDFGHJKL".split("");
  const thirdRow = "ZXCVBNM".split("");
  const rows = [firstRow, secondRow, thirdRow];

  function keyCheck(character) {
    /*
      I'm not pleased with this key status checker.  I may refactor after seeing Josh's 
      solution, but this janky solution will be in history for posterity's sake
    */

    const keys = history.flat().filter((k) => k.letter === character);
    if (keys.some((k) => k.status === "correct")) {
      return "correct";
    }

    if (keys.some((k) => k.status === "misplaced")) {
      return "misplaced";
    }

    if (keys.some((k) => k.status === "incorrect")) {
      return "incorrect";
    }

    return "unknown";
  }

  return (
    <div>
      {rows.map((row, index) => (
        <div key={index} className="key-row">
          {row.map((character) => (
            <Key
              key={character}
              status={keyCheck(character)}
              handleVirtualKeyClick={handleVirtualKeyClick}
            >
              {character}
            </Key>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
