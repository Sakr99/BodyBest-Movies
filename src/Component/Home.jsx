import axios from "axios";
import React, { useState, useEffect, useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./Context/GlobalContext";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("https://api.tvmaze.com/shows");
        setMovies(response.data.slice(0, 30));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  const changeSlide = useCallback(
    (direction) => {
      setActiveIndex((prevIndex) =>
        direction === "next"
          ? (prevIndex + 1) % movies.length
          : (prevIndex - 1 + movies.length) % movies.length
      );
    },
    [movies.length]
  );

  useEffect(() => {
    if (movies.length === 0) return;
    const interval = setInterval(() => changeSlide("next"), 3000);
    return () => clearInterval(interval);
  }, [movies, changeSlide]);

  return (
    <div
      className={`max-w-7xl mx-auto px-4 py-5 items-center ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <section className="text-center relative">
        <h1 className="border border-gray-800  dark:border-gray-50 p-3 rounded-lg text-5xl font-bold">
          BodyBest Movies
        </h1>
        <hr className="my-4 border-gray-300" />
        <div className="relative w-full max-w-2xl mx-auto overflow-hidden border-double rounded-md border-8 border-black">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {movies.map((movie, index) => (
              <>
                <img
                  key={movie.id}
                  src={
                    movie.image?.original ||
                    "https://via.placeholder.com/210x295?text=No+Image"
                  }
                  className="w-full object-fill h-80 flex-shrink-0"
                  alt="Movie Poster"
                />
              </>
            ))}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 lg:gap-4 lg:grid-cols-4 md:gap-2 mt-6">
        {movies.map((movie, i) => (
          <div key={i} className="flex justify-start">
            <Link to={`/movieDetails/${movie.id}`}>
              <div className="relative group m-3 h-fit active:scale-105 transition-transform duration-300">
                <img
                  src={
                    movie.image?.medium ||
                    "https://via.placeholder.com/210x295?text=No+Image"
                  }
                  className="rounded-lg w-full object-fill transform group-hover:scale-105 transition-transform duration-300"
                  alt="Poster Movie"
                />
                <div className="absolute w-full inset-x-0 bottom-0 h-1/4 rounded-lg bg-black bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <p className="text-yellow-200 text-md font-bold md:text-3xl">
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
