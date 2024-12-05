import React, { useState } from "react";

export default function Entry({ action }) {
  const [input, setInput] = useState("");

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    action(input);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter cocktail name"
      />
      <button type="submit">Search</button>
    </form>
  );
}
