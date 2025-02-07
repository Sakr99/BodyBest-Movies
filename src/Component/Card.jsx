import React from "react";
import { Link } from "react-router-dom";
import { useMovieContext } from "./Context/GlobalContext";
import * as actions from "./Context/ActionTypes";

function Card({ movie }) {
  const MovieContext = useMovieContext();
  const storedMovie = MovieContext.favourites.find((mo) => mo.id === movie.id);
  const FavouritedDisabled = storedMovie ? true : false;

  return (
    <>
      <Link to={`/movieDetails/${movie.id}`}>
        <div className="relative flex items-center justify-center m-3 overflow-hidden group">
          <img
        src={movie.show.image?.original ||
          "https://via.placeholder.com/300x450"}
            className="w-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
            alt={movie.show.name}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold">{movie.show.name}</p>
          </div>
        </div>
      </Link>
      <button
        disabled={FavouritedDisabled}
        onClick={() =>
          MovieContext.MoviesDispatch({
            type: actions.ADD_MOVIE_TO_FAVOURITES,
            payload: movie,
          })
        }
        type="button"
        className={`w-full mt-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 ${
          FavouritedDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Add to Favourites
        <i className="ml-2 fa-solid fa-heart fa-beat"></i>
      </button>
    </>
  );
}

export default Card;