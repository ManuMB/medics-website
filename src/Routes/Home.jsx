import React from "react";
import Card from "../Components/Card";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

const Home = () => {
  const { theme } = useContext(ContextGlobal);
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
    <main className="card-map" style={{ background: theme.backgroundColor }}>
      <div className="card-grid pt-8 pb-8 justify-center align-middle">
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
