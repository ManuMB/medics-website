import React from "react";
import Card from "../Components/Card";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { theme } = useContext(ContextGlobal);
  const [medicDetail, setMedicDetail] = useState([]);

  useEffect(() => {
    const saveCard = JSON.parse(localStorage.getItem("cards")) || [];
    setMedicDetail(saveCard);
  }, []);

  return (
    <div style={{ background: theme.backgroundColor }}>
      <h1
        className="font-bold text-3xl mb-5 pt-8"
        style={{ color: theme.textColor }}
      >
        Favourite medics
      </h1>
      <div className="card-grid pb-8">
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
    </div>
  );
};

export default Favs;
