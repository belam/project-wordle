import React, { useState } from "react";

import Guess from "../Guess";
import GuessHistory from "../GuessHistory";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [history, setHistory] = useState([]);

  function submitGuess(guess) {
    setHistory([
      ...history,
      {
        id: Math.random(),
        value: guess,
      },
    ]);
  }

  return (
    <>
      <GuessHistory history={history} />
      <Guess submitGuess={submitGuess} />
    </>
  );
}

export default Game;
