import React from "react";
import { Link } from "react-router-dom";
import Contact from "../Routes/Contact";
import Favs from "../Routes/Favs";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav className="bg-blue-600 mb-10 w-screen flex flex-row justify-between">
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

      <button className="rounded-full bg-gray-100 py-1 px-3 mr-4">
        Change theme
      </button>
    </nav>
  );
};

export default Navbar;
