import React, { useState } from "react";

function Work() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex flex-col mx-4 space-y-2">
      <label className="text-lg font-medium text-gray-700">
        Choose your current work profile:
      </label>
      <select
        className="block w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="">Select an option</option>
        <option value="Software Engineer">Software Engineer</option>
        <option value="Data Analyst">Data Analyst</option>
        <option value="Marketing Manager">Marketing Manager</option>
        <option value="Sales Representative">Sales Representative</option>
        <option value="Human Resources Manager">Human Resources Manager</option>
      </select>
      {selectedOption && (
        <p className="text-gray-500 text-sm">You selected {selectedOption}.</p>
      )}
    </div>
  );
}
export default Work;
