import { useState } from "react";
export default function Input({ handleOnDownKey }) {
  
  return (
    <div className="input-group mb-3 w-75">
      <input
        type="text"
        className="form-control"
        placeholder="Enter Todo"
        onKeyDown={handleOnDownKey}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        Button
      </button>
    </div>
  );
}
