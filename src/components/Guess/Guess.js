import React from "react";
import { range } from "../../utils";

function Guess({ word }) {

  return (
    <p className="guess">
      {range(5).map((num) => {
        const letter = word && word[num].letter;
        const status = word && word[num].status;
        return <span key={num} className={`cell ${status || ""}`}>
          {letter}
        </span>;
      })}
    </p>
  );
}

export default Guess;
