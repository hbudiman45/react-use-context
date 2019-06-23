import React, { useContext } from "react";
import { MovieContex } from "./MovieContex";

const Nav = props => {
  const [movies] = useContext(MovieContex);
  return (
    <nav className="navbar navbar-dark bg-dark justify-content-between">
      <div className="container">
        <span className="navbar-brand mb-0 h1">React State Management</span>
        <span className="text-white">Total Movies: {movies.length}</span>
      </div>
    </nav>
  );
};

export default Nav;
