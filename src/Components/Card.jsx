import React, { useState } from "react";
import { json, Link } from "react-router-dom";
import img from "../images/doctor.jpg";

const Card = ({ name, username, id }) => {
  const [added, setAdded] = useState([]);

  const medics = {
    id,
    name,
    username,
  };

  const addFav = () => {
    const saveCard = JSON.parse(localStorage.getItem("cards")) || [];
    saveCard.push(medics);
    localStorage.setItem("cards", JSON.stringify(saveCard));
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
