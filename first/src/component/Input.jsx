import React, { useState } from "react";

export default function Input({ handleAddItemClick }) {
  const [inputValue, setInputValue] = useState("");

  const handleOnDownKey = (evt) => {
    if (evt.key === "Enter") {
      handleAddItemClick(evt.target.value);
      setInputValue(""); // Clear the input field
    }
  };

  const handleButtonClick = () => {
    handleAddItemClick(inputValue);
    setInputValue(""); // Clear the input field
  };

  return (
    <div className="input-group mb-3 w-75">
      <input
        type="text"
        className="form-control"
        placeholder="Enter Todo"
        value={inputValue}
        onKeyDown={handleOnDownKey}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={handleButtonClick}
      >
        Button
      </button>
    </div>
  );
}
