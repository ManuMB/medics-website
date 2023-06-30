import React from "react";
import Card from "../Components/Card";
import { useEffect, useState } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Favs = () => {
  const [medicDetail, setMedicDetail] = useState([]);

  useEffect(() => {
    const saveCard = JSON.parse(localStorage.getItem("cards")) || [];
    setMedicDetail(saveCard);
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {medicDetail.map((user) => {
          return (
            <Card
              key={user.id}
              name={user.name}
              username={user.username}
              id={user.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Favs;
