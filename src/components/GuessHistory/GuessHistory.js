import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessHistory({ history }) {
  
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} word={history[num]} />
      ))}
    </div>
  );
}

export default GuessHistory;
