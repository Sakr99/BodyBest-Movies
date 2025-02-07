import React from "react";
import { Link } from "react-router-dom";

function MovieFavouriteCard({ movie }) {
  return (
    <Link to={`/movieDetails/${movie.show.id}`} className="block">
      <div className="relative flex items-center justify-center p-3">
        {movie ? (
          <img
            src={
              movie.show.image?.medium ||
              "https://via.placeholder.com/210x295?text=No+Image"
            }
            className="rounded-lg shadow-md w-full"
            alt={movie.show.name}
          />
        ) : (
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded-lg">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}
      </div>
    </Link>
  );
}

export default MovieFavouriteCard;
