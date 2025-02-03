import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [movies, setMovis] = useState([]);

  const getMovis = async () => {
    const dataUrl = await axios.get(
      `https://api.tvmaze.com/search/shows?q=girls`
    );
     setMovis((prevState) => [...prevState, ...dataUrl.data]);
  };

  useEffect(() => {
    getMovis();
  }, []);

  return (
    <>
      <div className="container movie-app">
        <section className="haeder">
          <h1 className="border border-dark p-3 rounded">BodyBest Movies</h1>
          <hr />
        </section>
        <div className="row row-cols-3 row-cols-sm-4 g-4">
           {movies.map((movie, i) => (
            <div key={i} className=" d-flex justify-content-start ">
              <Link to={`/movieDetails/${movie.show.id}`}>
                <div className="image-container d-flex align-item-center justify-content-center m-3">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/00/61/32/90/1000_F_61329058_IAFlLVfW5aalR2scgcvZA8lxUOsAcULl.jpg"
                    className="card-img-top rounded w-100 "
                    alt="Poster Movie"
                  />
                  <div className="overlay d-flex align-item-center justify-content-center">
                    {movie.show.name}
                  </div>
                </div>
              </Link>
            </div>
          ))}  
        </div>
      </div>
    </>
  );
}
