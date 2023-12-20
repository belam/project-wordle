import React from "react";

function GuessHistory({ history }) {
  return (
    <div className="guess-results">
      {history.map(({ id, value }) => (
        <p key={id} className="guess">
          {value}
        </p>
      ))}
    </div>
  );
}

export default GuessHistory;
