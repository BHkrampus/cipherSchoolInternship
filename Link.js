import React, { useState } from "react";

function Map() {
  const [text, setText] = useState("paste url here");
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(text);

  const handleEditClick = () => {
    setEditing(true);
    setInputValue(text);
  };

  const handleCancelClick = () => {
    setEditing(false);
    setInputValue(text);
  };

  const handleSaveClick = () => {
    setText(inputValue);
    setEditing(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      {editing ? (
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="bg-neutral-50  rounded-md border border-orange-500  w-80 mx-12 h-full"
          />
          <button
            onClick={handleSaveClick}
            className="bg-orange-400 justify-end rounded m-1  px-2"
          >
            Save
          </button>
          <button
            onClick={handleCancelClick}
            className="bg-orange-400 justify-end rounded m-1  px-2"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={handleEditClick}
            className="bg-orange-400 justify-end rounded mx-12 float-left px-2"
          >
            Edit
          </button>
          <p className="bg-neutral-50 text-gray-500 rounded-md border my-2 border-orange-500  w-80 mx-12 h-full">
            {text}
          </p>
        </div>
      )}
    </div>
  );
}

export default Map;
