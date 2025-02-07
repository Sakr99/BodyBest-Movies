import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./Context/GlobalContext";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const { theme } = useContext(ThemeContext);

  const getMovies = async () => {
    const dataUrl = await axios.get(
      `https://api.tvmaze.com/search/shows?q=girls`
    );
    setMovies((prevState) => [...prevState, ...dataUrl.data]);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={`max-w-7xl mx-auto px-4 py-5 ${theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"}`}>
      <section className="text-center">
        <h1 className="border border-gray-800 p-3 rounded-lg text-5xl font-bold">
          BodyBest Movies
        </h1>
        <hr className="my-4 border-gray-300" />
        <div className="carousel w-50">
  <div id="item1" className="carousel-item w-50 ">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTotcYeZTbKeKty0BKH-TjNYNDajuJtu_L5fA&s" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-50">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5CM8l-PtT0NLKoyNgLZ8prybm0_Uqdub0YA&s" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-50">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsMCftGgzk6d4it9Eg_uy3ei-fM1PXri6-yA&s" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-50">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2s037hny5bQ2fzim0U2TOrU9DXUGTdP95Xg&s" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {movies.map((movie, i) => (
          <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full ">
          <div key={i} className="flex justify-start">
            <Link to={`/movieDetails/${movie.show.id}`}>
              <div className="relative group m-3">
                <img
                  src={movie.show.image?.original ||
                    "https://via.placeholder.com/300x450"}
                  className="rounded-lg w-full object-cover"
                  alt="Poster Movie"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <p className="text-white font-bold">{movie.show.name}</p>
                </div>
              </div>
            </Link>
          </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}
