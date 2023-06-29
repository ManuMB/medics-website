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
      setError("El nombre es demasiado corto.");
      setSubmitted(false);
      return;
    } else {
      setSubmitted(true);
      setError("");
    }
    console.log(error);
    console.log(submitted);
  };

  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        ></input>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
