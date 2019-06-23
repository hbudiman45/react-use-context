import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContex } from "./MovieContex";
import AddMovie from "./AddMovie";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContex);

  return (
    <div>
      <AddMovie />
      {movies.map(movie => (
        <Movie key={movie.id} movieName={movie.name} moviePrice={movie.price} />
      ))}
    </div>
  );
};

export default MovieList;
