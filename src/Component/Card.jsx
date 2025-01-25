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
        <div className="image-container d-flex align-item-center justify-content-center m-3">
          <img
            src={movie.posterURL}
            className="card-img-top rounded w-100 "
            alt=""
          />
          <div className="overlay d-flex align-item-center justify-content-center">
            {movie.title}
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
        className="btn btn-dark  "
      >
        Add to Favourites
        <i className="iconFav fa-solid fa-heart fa-beat"></i>
      </button>
    </>
  );
}

export default Card;
