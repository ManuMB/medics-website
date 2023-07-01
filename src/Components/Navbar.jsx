import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, handleTheme } = useContext(ContextGlobal);

  return (
    <nav className="bg-blue-600 w-screen flex flex-row justify-between">
      <div>
        <Link to={"/"} className="text-white">
          Home
        </Link>
        <Link to={"/contact"} className="text-white">
          Contact Us
        </Link>
        <Link to={"/favs"} className="text-white">
          Favourites
        </Link>
      </div>

      <button
        onClick={handleTheme}
        className="rounded-full bg-gray-100 py-1 px-3 mr-4"
      >
        Change theme
      </button>
    </nav>
  );
};

export default Navbar;
