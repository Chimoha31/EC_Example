import React from "react";
import '../styles/Amazon.scss';

const Cards = ({ list, handleClick }) => {
  const { id, title, author, price, img, amount } = list;

  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="book" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>{price}</p>
        <button onClick={() => handleClick(list)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;
