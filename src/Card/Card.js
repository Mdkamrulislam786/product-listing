import React from "react";
import "./Card.css";
import { IconButton } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Card = ({
  original_name,
  first_air_date,
  backdrop_path,
  vote_average,
  type,
}) => {
  return (
    <div className="card">
      <div className="container">
        <img
          src={`${baseUrl}${backdrop_path}`}
          className="image"
          alt={original_name}
        />
        <div className="middle">
          <div className="text">PLAY</div>
        </div>
        <div className="card__movieType">
          <p>{type}</p>
        </div>
      </div>
      <div className="card__info">
        <h2>{original_name}</h2>
        <h4> {first_air_date} </h4>
        <h4>
          <a href="#none">Watch on zoom</a>{" "}
        </h4>
        <div className="card__bottom">
          <h4>imdb: {vote_average} </h4>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
