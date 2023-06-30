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
    <div className="card">
      <img src={img} className="medic-image" alt="Medic"></img>
      <h2>{name}</h2>
      <p>{username}</p>
      <p>{id}</p>
      <Link to={`/${id}`}>Mostrar detalles</Link>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
