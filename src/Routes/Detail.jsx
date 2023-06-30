import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import img from "../images/doctor.jpg";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Detail = () => {
  const params = useParams();
  const [medic, setMedic] = useState([]);

  async function handleFetch() {
    const response = await (
      await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    ).json();
    setMedic(response);
  }

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <div>
        <h1>Detail Dentist id </h1>
        <img src={img} alt="Medic"></img>
        <h2>{medic.name}</h2>
        <p>{medic.phone}</p>
        <p>{medic.website}</p>
      </div>
    </>
  );
};

export default Detail;
