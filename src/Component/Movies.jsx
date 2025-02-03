import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";

export default function Movies() {
  const [movies, setMovis] = useState([]);
  const [filterMovie, setfilterMovie] = useState([]);
  const getMovis = async () => {
    const dataUrl = await axios.get(
      `https://api.tvmaze.com/search/shows?q=girls`
    );
    setMovis((prevState) => [...prevState, ...dataUrl.data]);
    console.log(dataUrl.data);
  };

  useEffect(() => {
    getMovis();
  }, []);
  useEffect(() => {
    setfilterMovie(movies);
  }, [movies]);

  const handleSearch = (e) => {
    const filter = movies.filter((movie) =>
      movie.show.name.toLowerCase().includes(e.target.value)
    );
    setfilterMovie(filter);
  };
  return (
    <>
      <div className="container py-2">
        <form role="search">
          <input
            className="form-control form-control-lg"
            placeholder="Search"
            aria-label="Search"
            type="search"
            onInput={handleSearch}
          />
        </form>
        {filterMovie.length > 0 && (
          <div className="row row-cols-3 row-cols-sm-4  g-4 p-3">
            {filterMovie.map((movie, i) => (
              <div key={i} className="card d-flex justify-content-start p-2 ">
                {<Card movie={movie} />}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
