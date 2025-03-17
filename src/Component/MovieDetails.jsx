import axios from "axios";
import React, { useState, useEffect ,useContext} from "react";
import { Link, useParams } from "react-router-dom";
import Video from "../assets/modern-video-player-design-template-260nw-762468289.webp";
import { ThemeContext } from "./Context/GlobalContext";
import { data } from "jquery";

export default function MovieDetails() {
  let { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const { theme } = useContext(ThemeContext);

  const getMovieDetails = async () => {
    try {
      let { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      setMovieDetails(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <>
      {movieDetails ? (
        <div
          className={`grid grid-cols-1 md:grid-cols-4 gap-6 m-4 ${
            theme === "light" ? " text-black" : "bg-gray-800 "
          }`}
        >
          <div className="md:col-span-1  p-4 rounded-lg shadow-md">
            <img
              className="w-full rounded-lg"
              src={
                movieDetails.image?.original ||
                "https://via.placeholder.com/300x450"
              }
              alt={movieDetails.name}
            />
            <h5 className="text-lg font-semibold my-5">Cast:</h5>
            <ul className="list-disc pl-5 ">
              <li>George Washington</li>
              <li>Vin Diesel</li>
              <li>Tom Cruise</li>
              <li>Leonardo DiCaprio</li>
              <li>Robert Downey Jr.</li>
              <li>Will Smith</li>
              <li>Brad Pitt</li>
              <li>Scarlett Johansson</li>
            </ul>
          </div>

          <div className="md:col-span-3 p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-2">{movieDetails.name}</h1>
            <div className="flex items-center gap-2 text-yellow-500 font-semibold">
              <i className="fa-solid fa-star"></i>
              {movieDetails.rating?.average || "N/A"}
            </div>
            <hr className="my-4" />
            <p className="my-10">
              {movieDetails.summary?.replace(/<[^>]+>/g, "") ||
                "No description available."}
            </p>
            <Link
              to={`https://www.tvmaze.com/shows/${id}/${movieDetails.name.toLowerCase()}`}
              className="bg-yellow-500 text-white px-8 py-4  font-bold rounded-lg hover:bg-yellow-600 transition"
            >
              Watch Now
            </Link>

            <h4 className="text-xl my-10 font-semibold">Movie Story:</h4>

            <h4 className="text-xl font-semibold mt-6">Watch the trailer:</h4>
            <img
              src={Video}
              className="w-full rounded-lg shadow-md my-3"
              alt="trailer"
            />

            <div className="flex gap-4 mt-4"></div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </>
  );
}
