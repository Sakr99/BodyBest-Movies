import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./Context/GlobalContext";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const { theme } = useContext(ThemeContext);

  const getMovies = async () => {
    const dataUrl = await axios.get(`https://api.tvmaze.com/shows`);
    setMovies((prevState) => [...prevState, ...dataUrl.data]);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTotcYeZTbKeKty0BKH-TjNYNDajuJtu_L5fA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5CM8l-PtT0NLKoyNgLZ8prybm0_Uqdub0YA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsMCftGgzk6d4it9Eg_uy3ei-fM1PXri6-yA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2s037hny5bQ2fzim0U2TOrU9DXUGTdP95Xg&s",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`max-w-7xl mx-auto px-4 py-5 ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <section className="text-center">
        <h1 className="border border-gray-800 dark:border-gray-50 p-3 rounded-lg text-5xl font-bold">
          BodyBest Movies
        </h1>
        <hr className="my-4 border-gray-300" />

        <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <img key={index} src={src} className="w-full flex-shrink-0" />
            ))}
          </div>

          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  activeIndex === index ? "bg-gray-800" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-3  lg:gap-4 lg:grid-cols-4 md:gap-2 mt-6">
        {movies.map((movie, i) => (
          <div key={i} className="flex justify-start">
            <Link to={`/movieDetails/${movie.id}`}>
              <div className="relative group m-3 active:scale-105 transition-transform duration-300">
                <img
                  src={
                    movie.image?.original ||
                    "https://via.placeholder.com/300x450"
                  }
                  className="rounded-lg w-full object-fill transform group-hover:scale-105 transition-transform duration-300"
                  alt="Poster Movie"
                />
                <div className="absolute w-full inset-x-0 bottom-0 h-1/4 rounded-lg bg-black bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <p className="text-yellow-200 text-xs font-bold md:text-3xl">
                    {movie.name}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
