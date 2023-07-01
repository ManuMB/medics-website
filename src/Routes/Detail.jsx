import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import img from "../images/doctor.jpg";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

const Detail = () => {
  const { theme } = useContext(ContextGlobal);
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
    <div className="pt-8 pb-8" style={{ background: theme.backgroundColor }}>
      <h1 className="font-bold text-2xl" style={{ color: theme.textColor }}>
        Contact details of {medic.name}{" "}
      </h1>
      <div className="flex justify-center h-min">
        <div
          className="container rounded-xl w-min p-10 mt-10"
          style={{ background: theme.cardBackground }}
        >
          <div className="flex flex-row justify-center items-center gap-x-8">
            <img
              src={img}
              alt="Medic"
              className="container rounded-full border-2 w-72 h-min border-black "
            ></img>
            <div className="flex flex-col gap-y-2">
              <h2 className="font-bold text-xl">{medic.name}</h2>
              <p>{medic.email}</p>
              <p>{medic.phone}</p>
              <p>{medic.website}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
