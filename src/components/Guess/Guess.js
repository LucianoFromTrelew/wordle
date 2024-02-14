import React from "react";

function Guess({ guess }) {
  return (
    <p className="guess">
      {guess.map(({ letter, status }, index) => (
        <span
          className={`cell ${status}`}
          key={`${index}-${JSON.stringify(guess)}`}
        >
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
