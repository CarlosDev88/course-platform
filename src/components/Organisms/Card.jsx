import React from "react";
import { Link } from "react-router-dom";

const Card = ({ picture, name, cardId, path }) => {
  return (
    <article className="card s-border">
      <div className="card">
        <div className="img-container s-ratio-16-9">
          <Link to={`/${path}/${cardId}`}>
            <img src={picture} alt={name} />
          </Link>
        </div>
      </div>
      <div className="card__data -pxy-2">
        <h3 className="t4 center">{name}</h3>
      </div>
    </article>
  );
};

export default Card;
