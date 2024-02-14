import React, { useState } from "react";

function GuessForm({ disabled, onSubmit }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(value);

    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value.toUpperCase().substring(0, 5));
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="^[A-Za-z]{5}$"
        onChange={handleChange}
        value={value}
        disabled={disabled}
      />
    </form>
  );
}

export default GuessForm;
