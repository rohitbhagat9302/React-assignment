import React from "react";

const Ratings = ({ totalStars, markedStars }) => {
  const stars = [];

  // Generate stars based on totalStars and markedStars
  for (let i = 0; i < totalStars; i++) {
    const starClass = i < markedStars ? "fa fa-star checked" : "fa fa-star unchecked";
    stars.push(<span key={i} className={starClass}></span>);
  }

  return <div className="ratingSymbol">{stars}</div>;
};

export default Ratings;
