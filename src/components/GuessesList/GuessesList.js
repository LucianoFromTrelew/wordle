import React from "react";

import Guess from "../Guess";

function GuessesList({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <Guess guess={guess} key={`${index}-${JSON.stringify(guess)}`} />
      ))}
    </div>
  );
}

export default GuessesList;
