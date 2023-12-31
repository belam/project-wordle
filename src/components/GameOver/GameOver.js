import React from "react";

function Loser({ answer }) {
  return (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  );
}

function Winner({ attempts }) {
  return (
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong>{` ${attempts} ${attempts > 1 ? "guesses" : "guess"}`}</strong>.
    </p>
  );
}

function GameOver({ answer, attempts, winner, handleReset }) {
  return (
    <div className={`${winner ? "happy" : "sad"} banner`}>
      {winner ? <Winner attempts={attempts} /> : <Loser answer={answer} />}
      <p>
        <button onClick={handleReset}>(reset)</button>
      </p>
    </div>
  );
}

export default GameOver;
