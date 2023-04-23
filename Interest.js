import { useState } from "react";

function Interest() {
  const [showModal, setShowModal] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    "Web Development",
    "App Development",
    "Machine Learning",
    "Blockchain",
    "Data Science",
    "Artificial Intelligence",
    "Software Development",
  ];

  const handleOptionSelect = (option) => {
    setSelectedOptions([...selectedOptions, option]);
  };

  return (
    <div className="flex float-right m-6 ">
      <button
        className="bg-orange-400 px-4 m-4 h-8 rounded"
        onClick={() => setShowModal(true)}
      >
        Edit
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-blue-50 p-4 rounded shadow-md">
            <h2 className="text-lg font-bold mb-4">Choose Interest</h2>

            <div className="grid grid-cols-2 gap-4">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="border rounded p-2 border-orange-400 bg-rose-50 cursor-pointer"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </div>
              ))}
            </div>

            <button
              className="bg-orange-400  px-4 py-2 rounded mt-4"
              onClick={() => setShowModal(false)}
            >
              Close Panel
            </button>
          </div>
        </div>
      )}

      {/* Selected Options */}
      {selectedOptions.length > 0 && (
        <div>
          {/* <h2 className="text-lg font-bold mb-4">Selected Options</h2> */}

          <ul className="container flex">
            {selectedOptions.map((option, index) => (
              <li
                className="bg-neutral-50 border-orange-500 rounded-lg border-2 mx-2 my-4 px-2 text-sm"
                key={index}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Interest;
