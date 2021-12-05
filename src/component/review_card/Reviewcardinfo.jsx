import React from "react";
import Rating from "@mui/material/Rating";

import "./reviewcard.css";
const Reviewcardinfo = ({ review }) => {
  return (
    <div className="reviewcard__container ">
      <div className="reviewcard__avatar">{review.username[0]}</div>
      <div className="reviewcard__username">
        <h3>{review.username}</h3>
      </div>
      <div className="reviewcard__review">
        <Rating name="read-only" value={review.rating} readOnly />
      </div>
      <div className="reviewcard__comment">
        <p>{review.comment}</p>
      </div>
    </div>
  );
};

export default Reviewcardinfo;
