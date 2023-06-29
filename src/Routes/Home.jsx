import React from "react";
import Card from "../Components/Card";
import { useEffect, useState } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [users, setUsers] = useState([]);

  async function handleFetch() {
    const response = await (
      await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
    setUsers(response);
  }

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <main className="card-map">
      <h1>Home</h1>
      <div className="card-grid">
        {users.map((user) => {
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
    </main>
  );
};

export default Home;
