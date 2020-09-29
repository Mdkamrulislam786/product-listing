import React from "react";
import "./Card.css";
import { IconButton } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const Card = ({ src, title, description, price }) => {
  return (
    <div className="card">
      <img src={src} alt="img" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4> {description} </h4>
        <h4>
          <a href="#none">Watch on zoom</a>{" "}
        </h4>
        <div className="card__bottom">
          <h4>{price} </h4>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
