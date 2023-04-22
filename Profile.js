import React, { useState } from "react";
import "./App.css";
import { FaBell, FaSearch } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

function Profile() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
    >
      <nav className="flex justify-between items-center py-6 px-8">
        <div className="flex items-center">
          <img
            src="cypher_logo.png"
            alt="Profile icon"
            className="h-8 w-8 mr-4"
          />
          <h1 className="text-xl font-bold">CipherSchools</h1>
        </div>
        <div className="flex items-center">
          <div className="relative mr-6">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-200 rounded-full py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <FaSearch className="absolute right-0 top-0 mt-3 mr-3 text-gray-500" />
          </div>
          <div className="mr-6">
            <FaBell className="text-xl" />
          </div>
          <div className="flex items-center">
            <button onClick={toggleDarkMode}>
              <FiSun className="text-xl  mr-2" />
            </button>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-0 h-24 bg-orange-400">
        <div className="flex items-center">
          <img
            src="cypher_logo.png"
            alt="Profile icon"
            className="h-20 w-20 mr-4 my-2 mx-4 z-10 float-left"
          />

          <h1 className="text-l font-bold w-6">
            Hello! Shivam shivamsingh24sh@gmail.com
          </h1>
        </div>
        <div className="container my-1 text-lg h-full w-full font-bold">
          <span className=" text-xl w-1/2 m-4">About me</span>
          <span className=" object-right w-1/6 float-right">
            <button className="bg-orange-500 justify-end rounded m-1  px-2">
              edit
            </button>
          </span>
          <input
            className="bg-neutral-50 rounded-lg border-2 border-orange-500 box-border mx-10 h-full w-5/6"
            type="text"
          ></input>
          <hr />
          <br />
          <hr />
          <div>cipher map</div>
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          on the web
          <div className="conatainer flex grid-cols-4">
            linkedin{" "}
            <input className="bg-orange-200 w-60 mx-4 h-full" type="text" />
            instagram
            <input className="bg-orange-200 w-60 mx-4 h-full" type="text" />
            safari{" "}
            <input className="bg-orange-200 w-60 mx-4 h-full " type="text" />
            happa
            <input className="bg-orange-200 w-60 mx-4 h-full " type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

/*  */
