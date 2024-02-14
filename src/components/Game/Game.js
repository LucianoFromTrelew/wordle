import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import GuessForm from "../GuessForm";
import GuessesList from "../GuessesList";
import Banner from "../Banner";

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
  const [userGuesses, setUserGuesses] = useState([]);
  const [displayBanner, setDisplayBanner] = useState(false);
  const [bannerType, setBannerType] = useState("");

  console.log({ answer });

  const handleSubmit = (newGuess) => {
    const result = checkGuess(newGuess, answer);
    const newGuesses = [...userGuesses, result];

    setUserGuesses(newGuesses);

    if (newGuess === answer) {
      setDisplayBanner(true);
      setBannerType("happy");
    } else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setDisplayBanner(true);
      setBannerType("sad");
    }
  };
  const handleReset = () => {
    setDisplayBanner(false);
    setBannerType("");
    setUserGuesses([]);
    setAnswer(sample(WORDS));
  };

  const guessesLeftCount = NUM_OF_GUESSES_ALLOWED - userGuesses.length;
  const guessesLeft =
    guessesLeftCount > 0
      ? new Array(guessesLeftCount)
          .fill(null)
          .map(() =>
            new Array(5).fill(null).map(() => ({ letter: " ", status: "" }))
          )
      : [];
  const guesses = [...userGuesses].concat([...guessesLeft]);

  const finished = Boolean(bannerType.length);

  return (
    <>
      <GuessesList guesses={guesses} />
      <GuessForm disabled={finished} onSubmit={handleSubmit} />
      {displayBanner && (
        <Banner type={bannerType}>
          {bannerType === "happy" ? (
            <p>
              <strong>Congratulations!</strong> Got it in{" "}
              <strong>{userGuesses.length} guesses</strong>.
            </p>
          ) : (
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          )}
          <div>
            <button onClick={handleReset}>Reset</button>
          </div>
        </Banner>
      )}
    </>
  );
}

export default Game;
