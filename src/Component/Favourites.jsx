import React from "react";
import { useMovieContext } from "./Context/GlobalContext";
import MovieFavouriteCard from "./MovieFavouriteCard";
import * as actions from "./Context/ActionTypes";

function Favourites() {
  const MovieContext = useMovieContext();

  return (
    <div className="max-w-7xl mx-auto px-4 py-5">
      <h1 className="text-2xl font-bold">Favourite Movie</h1>
      <hr className="my-4 border-gray-300" />

      {MovieContext.favourites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {MovieContext.favourites.map((movie) => (
            <div
              key={movie.id}
              className=" shadow-md rounded-lg p-4 flex flex-col"
            >
              <MovieFavouriteCard movie={movie} />
              <div className=" w-full inset-x-0 bottom-0 h-1/4 rounded-lg p-2 bg-black flex flex-col items-center justify-center">
                <p className="text-yellow-200 text-xs font-bold md:text-3xl">
                  {movie.name}
                </p>
              </div>
              <button
                onClick={() =>
                  MovieContext.MoviesDispatch({
                    type: actions.REMOVE_MOVIE_FROM_FAVOURITES,
                    payload: movie,
                  })
                }
                type="button"
                className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition p-2 rounded mt-2 flex items-center justify-center"
              >
                Remove <i className="fa-solid fa-trash ml-2"></i>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="text-xl text-gray-600">No Movies In Your Favourites</h2>
      )}
    </div>
  );
}

export default Favourites;
