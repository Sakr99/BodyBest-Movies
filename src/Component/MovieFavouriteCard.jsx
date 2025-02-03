import React from "react";
import { Link } from "react-router-dom";

function MovieFavouriteCard({ movie }) {
  return (
    <Link to={`/movieDetails/${movie.show.id}`}>
      <div className="image-container d-flex align-item-center justify-content-center">
        {movie ? (
          <img
          src="https://as1.ftcdn.net/v2/jpg/00/61/32/90/1000_F_61329058_IAFlLVfW5aalR2scgcvZA8lxUOsAcULl.jpg"
          className="rounded w-100 "
            alt={movie.show.name}
          />
        ) : (
          <div></div>
        )}
      </div>
    </Link>
  );
}
export default MovieFavouriteCard;
