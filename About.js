import React, { useState } from "react";

function About() {
  const [text, setText] = useState("Cipher Schools");
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
            className="bg-neutral-50 rounded-lg border-2 border-orange-500 text-sm box-border my-4 mx-10 h-16 w-5/6"
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
          <span className=" text-xl w-1/2 my-2 m-4">
            <span className=" object-right w-1/6 float-right">
              <button
                onClick={handleEditClick}
                className="bg-orange-400 justify-end rounded m-1  px-2"
              >
                Edit
              </button>
            </span>
          </span>
          <p className="bg-neutral-50 rounded-lg border-2 text-sm border-orange-500 box-border my-4 mx-10 h-full w-5/6">
            {text}
          </p>
        </div>
      )}
    </div>
  );
}

export default About;
