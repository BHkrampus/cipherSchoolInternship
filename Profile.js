import React, { useState } from "react";
import "./App.css";
import { FaBell, FaSearch } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import Work from "./Work";
import Education from "./Education";
// import Map from "./Map";
import GitHubCalendar from "react-github-calendar";

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
        <span className=" object-right w-1/6 float-right">
          <button className="border-2 border-slate-700 bg-orange-300 justify-end rounded m-2  px-2">
            2k Followers
          </button>
        </span>
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

        <div className="container my-4 text-lg h-full w-full ">
          <span className=" text-xl w-1/2 m-4">About me</span>
          <span className=" object-right w-1/6 float-right">
            <button className="bg-orange-400 justify-end rounded m-1  px-2">
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
          cipher map
          <div className="container mx-20">
            <GitHubCalendar username="grubersjoe" />
          </div>
          <hr />
          <div className="bg-white mx-0">.</div>
          on the web
          <span className=" object-right w-1/6 float-right">
            <button className="bg-orange-400 justify-end rounded m-1  px-2">
              edit
            </button>
          </span>
          <hr />
          <div className="conatainer grid-cols-4 text-sm w-11 m-4">
            Linkedin:
            <input
              className="bg-neutral-50 rounded-md border border-orange-500  w-80 mx-12 h-full"
              type="text"
              placeholder="paster url here"
            />
            Github:
            <input
              className="bg-neutral-50 rounded-md border border-orange-500 w-80 mx-12 h-full"
              type="text"
              placeholder="paster url here"
            />
            Twitter:
            <input
              className="bg-neutral-50 rounded-md border border-orange-500 w-80 mx-12 h-full "
              type="text"
              placeholder="paster url here"
            />
            Instagram:
            <input
              className="bg-neutral-50 rounded-md border border-orange-500 w-80 mx-12 h-full "
              type="text"
              placeholder="paster url here"
            />
            Facebook:
            <input
              className="bg-neutral-50 rounded-md border border-orange-500 w-80 mx-12 h-full "
              type="text"
              placeholder="paster url here"
            />
          </div>
          <hr />
          <div className="bg-white mx-0">.</div>
          Education Details:
          <hr />
          <span className=" object-right w-1/6 float-right">
            <button className="bg-orange-400 justify-end rounded m-1  px-2">
              Save
            </button>
          </span>
          <div className="container grid grid-cols-2">
            <div className="container  my-4  ">
              <Education></Education>
            </div>
            <div className="container  my-4 ">
              <Work></Work>
            </div>
          </div>
          <hr />
          <div className="bg-white mx-0">.</div>
          Interest:
          <hr />
          <div className="container flex">
            <span className="bg-neutral-50 border-orange-500 rounded-lg border-2 mx-2 my-4 px-2 text-sm">
              Web development
            </span>
            <span className="bg-neutral-50 border-orange-500 rounded-lg border-2 mx-2 my-4 px-2 text-sm">
              App Development
            </span>
            <span className="bg-neutral-50 border-orange-500 rounded-lg border-2 mx-2 my-4 px-2 text-sm">
              Machine Learning
            </span>
            <span className="bg-neutral-50 border-orange-500 rounded-lg border-2 mx-2 my-4 px-2 text-sm">
              Data Science
            </span>
            <span className="bg-neutral-50 border-orange-500 rounded-lg border-2 mx-2 my-4 px-2 text-sm">
              Blockchain
            </span>
          </div>
          <div className="bg-white mx-0">.</div>
          <div className="container flex"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
