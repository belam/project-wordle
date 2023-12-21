import React, { useState } from "react";

import GuessInput from "../GuessInput";
import GuessHistory from "../GuessHistory";
import GameOver from "../GameOver/GameOver";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const status = {
  RUNNING: "running",
  WON: "won",
  LOST: "lost",
};

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [history, setHistory] = useState([]);
  const [gameStatus, setGameStatus] = useState(status.RUNNING);

  function submitGuess(guess) {
    const evaluatedGuess = checkGuess(guess, answer);
    const nextHistory = [...history, evaluatedGuess];
    setHistory(nextHistory);

    if (evaluatedGuess.every((word) => word.status === "correct")) {
      setGameStatus(status.WON);
    } else if (nextHistory.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus(status.LOST);
    }
  }

  return (
    <>
      <GuessHistory history={history} />
      {gameStatus === status.RUNNING && (
        <GuessInput submitGuess={submitGuess} />
      )}
      {gameStatus !== status.RUNNING && (
        <GameOver
          answer={answer}
          attempts={history.length}
          winner={gameStatus === status.WON}
        />
      )}
    </>
  );
}

export default Game;
