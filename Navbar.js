import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

function Navbar() {
  const [name, setName] = useState("Shivam Kumar");
  const [email, setEmail] = useState("shivamkumar@gmail.com");
  const [showEditForm, setShowEditForm] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowEditForm(false);
  };

  return (
    <div>
      {!showEditForm && (
        <div className="font-bold">
          <p> {name}</p>
          <p> {email}</p>
          <button
            className="container flex flex-row-reverse"
            onClick={() => setShowEditForm(true)}
          >
            <FaPencilAlt />
          </button>
        </div>
      )}
      {showEditForm && (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="border border-slate-700 bg-orange-300 justify-end rounded m-1  px-1"
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="border border-slate-700 bg-orange-300 justify-end rounded m-1  px-1"
            />
          </label>
          <br />
          <button
            type="submit"
            className="border border-slate-700 bg-orange-300 justify-end rounded m-0  px-2"
          >
            Save
          </button>
        </form>
      )}
    </div>
  );
}
export default Navbar;
