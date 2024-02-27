import './Item.scss';
import React from "react";

const Item = ({ data }) => {
    const heightInCentimeters = data.height;
    const meters = Math.floor(heightInCentimeters / 100);
    const centimeters = heightInCentimeters % 100;
  
    return (
      <div className="content-stars-wars-gird-item">
        <div className="title">
          <p>{data.name}</p>
        </div>
        <div className="text">
          <p>Taille : {meters ? `${meters}m${centimeters}` : `${centimeters} cm`}</p>
          <p>Poid : {data.mass === 'unknown' ? 'unknown' : `${data.mass} Kg`}</p>
          <p>Cheveux : {data.hair_color}</p>
          <p>Yeux : {data.eye_color}</p>
          <p>Genre : {data.gender}</p>
        </div>
      </div>
    );
  };

  export default Item;