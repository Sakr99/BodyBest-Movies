import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Video from "../assets/modern-video-player-design-template-260nw-762468289.webp";
export default function MovieDetails() {
  let params = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const getMovieDetails = async (id) => {
    let { data } = await axios.get(
      `https://api.sampleapis.com/movies/drama/${id}`
    );
    setMovieDetails(data);
  };
  useEffect(() => {
    getMovieDetails(params.id);
  });
  return (
    <>
      {movieDetails ? (
        <div className="row m-2 ">
          <div className="col-md-3">
            <div>
              <img className="w-100 p-2" src={movieDetails.posterURL} alt="" />
            </div>
            <h5>Artest movie :</h5>
            <ul>
              <li>Gorg Washnton </li>
              <li>Van Disil</li>
              <li>Tom Chros </li>
              <li>Ahmed Helme</li>
              <li>Mohamed Ramadan</li>
              <li>Will Thmes</li>
              <li>Adel Emam</li>
              <li>Hend Sabry</li>
            </ul>
          </div>
          <div className="col-md-9 ">
            <h1 className="card-title">{movieDetails.title}</h1>
            <i className="star-icon fa-solid fa-star d-flex  flex-row-reverse top-0 p-1">
              9.0
            </i>
            <hr />
            <h4>Movie Story :</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              quasi suscipit quod ipsa placeat assumenda, iusto neque
              exercitationem quae amet nulla quia illo veritatis doloribus!
              Nihil vero neque doloribus sapiente!
            </p>
            <h4>Watch the trailer :</h4>
            <img src={Video} className="img-fluid w-100" alt="trailer" />
            <button type="button" className="btn btn-outline-success p-2 m-2">
              Download
            </button>
            <button type="button" className="btn btn-outline-warning p-2 m-2">
              Watched
            </button>
          </div>
        </div>
      ) : (
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
}
