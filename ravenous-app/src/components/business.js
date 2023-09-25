import React from 'react';


const Business = ({
  image,
  name,
  address,
  city,
  state,
  zipcode,
  category,
  rating,
  reviewCount,
}) => {
  return (
    <div className="business-card">
      <div className="business-image">
        <img src={image} alt={`${name} Image`} />
      </div>
      <div className="business-details">
        <h2 className="business-name">{name}</h2>
        <p className="business-address">
          {address}, {city}, {state} {zipcode}
        </p>
        <p className="business-category">{category}</p>
        <div className="business-rating">
          <p className="rating">{rating} stars</p>
          <p className="review-count">{reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
