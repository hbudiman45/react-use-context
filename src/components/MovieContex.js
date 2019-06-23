import React, { useState, createContext } from "react";

export const MovieContex = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    { name: "Inception", price: "$10", id: 1 },
    { name: "Forest Gum", price: "$10", id: 2 },
    { name: "Shawshank Redemption", price: "$10", id: 3 },
    { name: "Wall-E", price: "$10", id: 5 }
  ]);
  return (
    <MovieContex.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContex.Provider>
  );
};
