import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Loser({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

function Winner({ attempts }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{` ${attempts} ${attempts > 1 ? "guesses" : "guess"}`}</strong>.
      </p>
    </div>
  );
}

function GameOver({ answer, attempts, winner }) {
  return winner ? <Winner attempts={attempts} /> : <Loser answer={answer} />;
}

export default GameOver;
