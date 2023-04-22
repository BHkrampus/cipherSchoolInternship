import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Map() {
  const [date, setDate] = useState(new Date());

  function getTileClass({ date, view }) {
    // Get the activity count for the current date
    const activityCount = getActivityCountForDate(date);

    // Define the color scale for each activity level
    const colorScale = ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"];

    // Get the background color based on the activity count
    const bgColor =
      activityCount === 0 ? "gray-100" : `bg-${colorScale[activityCount - 1]}`;

    // Return the class for the tile
    return `
      p-2 rounded-full
      ${view === "month" ? "w-8 h-8" : "w-16 h-16"}
      ${bgColor}
      hover:bg-green-300
      transition-colors duration-200
    `;
  }

  function getActivityCountForDate(date) {
    // Replace this function with your own logic to get the activity count for the given date
    // For example, you could fetch data from an API or read it from a local storage
    // In this example, we just return a random number between 0 and 4
    return Math.floor(Math.random() * 5);
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Activity Map</h1>
      <Calendar
        value={date}
        onChange={setDate}
        tileClassName={getTileClass}
        tileDisabled={() => false}
      />
    </div>
  );
}

export default Map;
