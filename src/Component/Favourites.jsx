import React from "react";
import { useMovieContext } from "./Context/GlobalContext";
import MovieFavouriteCard from "./MovieFavouriteCard";
import * as actions from "./Context/ActionTypes"
function Favourites() {
  const MovieContext = useMovieContext();
  return (
    <>
      <div className="container  py-5">
        <h1>Favourite Movie</h1>
        <hr />
        {MovieContext.favourites.length > 0 ? (
          <div className="row row-cols-3 row-cols-sm-4 g-4">
            {MovieContext.favourites.map((movie) => (
              <div
                key={movie.show.id}
                className="card d-flex justify-content-start p-2 "
              >
                {<MovieFavouriteCard movie={movie} />}
                 <button                        onClick={() =>
                          MovieContext.MoviesDispatch({
                            type: actions.REMOVE_MOVIE_FROM_FAVOURITES,
                            payload: movie,
                          })
                        }
                        type="button"
                        className="btn btn-outline-danger m-2"
                      >
                     Remove <i class="fa-solid fa-trash"></i>
                      </button>
              </div>
            ))}
          </div>
        ) : (
          <h2>No Movies In Your Favourites</h2>
        )}
      </div>
    </>
  );
}

export default Favourites;
