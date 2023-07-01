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
      <h1 className="font-bold text-2xl">Contact details of {medic.name} </h1>
      <div className="flex justify-center h-min">
        <div className="container rounded-xl bg-slate-200 w-min p-10 mt-10">
          <div className="flex flex-row justify-center items-center gap-x-8">
            <img
              src={img}
              alt="Medic"
              className="container rounded-full border-2 w-72 h-min border-black "
            ></img>
            <div className="flex flex-col gap-y-2">
              <h2 className="font-bold">{medic.name}</h2>
              <p>{medic.email}</p>
              <p>{medic.phone}</p>
              <p>{medic.website}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
