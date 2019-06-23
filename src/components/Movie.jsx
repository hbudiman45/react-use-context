import React from "react";

const Movie = props => {
  return (
    <div className="card m-2">
      <div className="card-body">
        <h3 className="card-title">{props.movieName}</h3>
        <p className="card-text">{props.moviePrice}</p>
      </div>
    </div>
  );
};

export default Movie;
