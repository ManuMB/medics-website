import React, { useState, useEffect } from "react";
import { json, Link } from "react-router-dom";
import img from "../images/doctor.jpg";

const Card = ({ name, username, id }) => {
  const [clicked, setClicked] = useState(false);

  const medics = {
    id,
    name,
    username,
  };

  useEffect(() => {
    const saveCard = JSON.parse(localStorage.getItem("cards")) || [];
    const searchCard = saveCard.find((c) => c.id === id);
    if (searchCard) {
      setClicked(true);
    }
  }, [id]);

  const addFav = () => {
    const saveCard = JSON.parse(localStorage.getItem("cards")) || [];
    if (!clicked) {
      saveCard.push(medics);
      localStorage.setItem("cards", JSON.stringify(saveCard));
      setClicked(true);
    } else {
      alert("Medic is already added to favourites.");
    }
  };

  return (
    <div className=" ">
      <div className="p-2 text-center card container rounded-xl bg-gray-100 border border-3 hover:transform hover:scale-105 transition-all duration-300">
        <img
          src={img}
          className="medic-image rounded-full border-2 border-black "
          alt="Medic"
        ></img>
        <div className="py-3">
          <h2>{name}</h2>
          <p>{username}</p>
          <p>{id}</p>
        </div>
        <Link
          to={`/${id}`}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-normal hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
        >
          Show details
        </Link>
        <button
          onClick={addFav}
          className="favButton rounded-full mt-5 text-white text-lg py-1 px-3 bg-blue-500 hover:bg-blue-700 font-semibold "
        >
          Add fav
        </button>
      </div>
    </div>
  );
};

export default Card;
