import React, { useState } from "react";

function GuessInput({ submitGuess }) {
  
  const [guess, setGuess] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    submitGuess(guess);
    setGuess("");
  }

  return (
    <form onSubmit={submitHandler} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter Guess:</label>
      <input
        id="guess-input"
        type="text"
        maxLength="5"
        pattern="[A-Z]{5}"
        title="Your guess must be 5 letters"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
