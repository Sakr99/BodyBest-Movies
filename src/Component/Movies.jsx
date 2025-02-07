import axios from "axios";
import React, { useState, useEffect } from "react";
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
      <div className="container py-4">
        <form role="search">
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search"
            aria-label="Search"
            type="search"
            onInput={handleSearch}
          />
        </form>
        
        {filterMovie.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {filterMovie.map((movie, i) => (
              <div key={i} className="p-2">
                <Card movie={movie} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
