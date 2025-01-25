import React from "react";
import { Link } from "react-router-dom";

function MovieFavouriteCard({ movie }) {
  return (
    <Link to={`/movieDetails/${movie.id}`}>
      <div className="image-container d-flex align-item-center justify-content-center">
        {movie.posterURL ? (
          <img
            src={movie.posterURL}
            className="rounded w-100 "
            alt={movie.title}
          />
        ) : (
          <div></div>
        )}
      </div>
    </Link>
  );
}
export default MovieFavouriteCard;
