import React from "react";
import { Link } from "react-router-dom";
import Contact from "../Routes/Contact";
import Favs from "../Routes/Favs";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav>
      <Link to={"/contact"}>Contact Us</Link>
      <Link to={"/favs"}>Favourites</Link>

      <button>Change theme</button>
    </nav>
  );
};

export default Navbar;
