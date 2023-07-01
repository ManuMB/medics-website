import React from "react";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length < 5 || name.trim() === "") {
      setError(true);
      alert("Error, name is too short.");
      setSubmitted(false);
      return;
      /*}
    if (!email.trim().contains("@")) {
      setError(true);
      alert("Error, email format not valid.");
      setSubmitted(false);
    } else {
      setSubmitted(true);
      setError("");
      */
    }
    console.log(error);
    console.log(submitted);
    alert("Form submitted successfully.");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-y-2 justify-items-center "
      >
        <label>
          <span className="block">Name</span>
          <input
            id="name"
            name="name"
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Firstname Lastname"
            className="
          mt-1
          block
          w-max
          rounded-md
          border-gray-300
          shadow-sm
          focus:border-blue-300 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          ></input>
        </label>
        <label className="block">
          <span className="block">Email</span>
          <input
            id="email"
            name="email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            className="
          mt-1
          block
          w-max
          rounded-md
          border-gray-300
          shadow-sm
          focus:border-blue-300 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          ></input>
        </label>
        <button
          type="submit"
          className="rounded-full mt-5 text-white text-lg py-1 px-3 w-min bg-blue-500 hover:bg-blue-700 font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
