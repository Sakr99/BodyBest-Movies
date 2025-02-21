import axios from "axios";
import React, { useState, useEffect ,useContext} from "react";
import { useParams } from "react-router-dom";
import Video from "../assets/modern-video-player-design-template-260nw-762468289.webp";
import { ThemeContext } from "./Context/GlobalContext";

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
          {/* Movie Poster & Cast */}
          <div className="md:col-span-1  p-4 rounded-lg shadow-md">
            <img
              className="w-full rounded-lg"
              src={
                movieDetails.image?.original ||
                "https://via.placeholder.com/300x450"
              }
              alt={movieDetails.name}
            />
          </div>

          <div className="md:col-span-3 p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-2">{movieDetails.name}</h1>
            <div className="flex items-center gap-2 text-yellow-500 font-semibold">
              <i className="fa-solid fa-star"></i>
              {movieDetails.rating?.average || "N/A"}
            </div>
            <hr className="my-4" />
            <p>
              {movieDetails.summary?.replace(/<[^>]+>/g, "") ||
                "No description available."}
            </p>
            <h5 className="text-lg font-semibold mt-4">Cast:</h5>
            <ul className="list-disc pl-5 ">
              <li>Gorg Washnton</li>
              <li>Van Disil</li>
              <li>Tom Chros</li>
              <li>Ahmed Helme</li>
              <li>Mohamed Ramadan</li>
              <li>Will Thmes</li>
              <li>Adel Emam</li>
              <li>Hend Sabry</li>
            </ul>

            <h4 className="text-xl mt-2 font-semibold mb-2">Movie Story:</h4>

            <h4 className="text-xl font-semibold mt-6">Watch the trailer:</h4>
            <img
              src={Video}
              className="w-full rounded-lg shadow-md my-3"
              alt="trailer"
            />

            <div className="flex gap-4 mt-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                Download
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Watched
              </button>
            </div>
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
