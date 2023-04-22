import React, { useState } from "react";

function Education() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex flex-col mx-4 space-y-2">
      <label className="text-lg font-medium text-gray-700">
        Choose your highest education level:
      </label>
      <select
        className="block w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="">Select an option</option>
        <option value="High School Diploma">High School Diploma</option>
        <option value="Associate's Degree">Associate's Degree</option>
        <option value="Bachelor's Degree">Bachelor's Degree</option>
        <option value="Master's Degree">Master's Degree</option>
        <option value="Doctorate">Doctorate</option>
      </select>
      {selectedOption && (
        <p className="text-gray-500 text-sm">You selected {selectedOption}.</p>
      )}
    </div>
  );
}
export default Education;
