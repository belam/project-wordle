import React, { useState } from "react";

import GuessInput from "../GuessInput";
import GuessHistory from "../GuessHistory";
import GameOver from "../GameOver";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const status = {
  RUNNING: "running",
  WON: "won",
  LOST: "lost",
};

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
  const [history, setHistory] = useState([]);
  const [gameStatus, setGameStatus] = useState(status.RUNNING);

  function submitGuess(guess) {
    const evaluatedGuess = checkGuess(guess, answer);
    const nextHistory = [...history, evaluatedGuess];

    setHistory(nextHistory);

    if (guess === answer) {
      setGameStatus(status.WON);
    } else if (nextHistory.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus(status.LOST);
    }
  }

  function handleReset() {
    const nextAnswer = sample(WORDS);
    setAnswer(nextAnswer);
    setHistory([]);
    setGameStatus(status.RUNNING);
  }

  return (
    <>
      <GuessHistory history={history} />
      {gameStatus === status.RUNNING && (
        <GuessInput history={history} submitGuess={submitGuess} />
      )}
      {gameStatus !== status.RUNNING && (
        <GameOver
          answer={answer}
          attempts={history.length}
          winner={gameStatus === status.WON}
          handleReset={handleReset}
        />
      )}
    </>
  );
}

export default Game;
