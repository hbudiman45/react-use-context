import React, { useState, useContext } from "react";
import { MovieContex } from "./MovieContex";

const AddMovie = props => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovie] = useContext(MovieContex);

  const updateName = event => {
    setName(event.target.value);
  };
  const updatePrice = event => {
    setPrice(event.target.value);
  };

  const addMovie = event => {
    let num = Math.floor(Math.random() * 100 + 1);
    event.preventDefault();
    setMovie(prevMovies => [
      ...prevMovies,
      { name: name, price: price, id: num }
    ]);
  };

  return (
    <div>
      <form onSubmit={addMovie}>
        <input
          type="text"
          name="movie"
          placeholder="Movie"
          value={name}
          onChange={updateName}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={price}
          onChange={updatePrice}
        />
        <button role="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
