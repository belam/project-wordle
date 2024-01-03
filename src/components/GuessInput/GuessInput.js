import React, { useRef, useState } from "react";
import Keyboard from "../Keyboard";

//TODO: constants file?
const maxLength = 5;

function GuessInput({ submitGuess, history }) {
  const [guess, setGuess] = useState("");
  const ref = useRef();

  function submitHandler(event) {
    event.preventDefault();

    submitGuess(guess);
    setGuess("");
  }

  function handleVirtualKeyClick(character) {
    if (guess.length < maxLength) {
      const nextGuess = guess + character;
      setGuess(nextGuess);
    }

    // Set focus on the input for return/delete ease of access
    console.log(ref.current.focus());
  }

  return (
    <>
      <form onSubmit={submitHandler} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter Guess:</label>
        <input
          id="guess-input"
          ref={ref}
          type="text"
          maxLength={maxLength}
          pattern={`[A-Z]{${5}}`}
          title="Your guess must be 5 letters"
          value={guess}
          onChange={(event) => setGuess(event.target.value.toUpperCase())}
        />
      </form>
      <Keyboard
        history={history}
        handleVirtualKeyClick={handleVirtualKeyClick}
      />
    </>
  );
}

export default GuessInput;
