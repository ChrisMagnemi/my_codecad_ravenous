import React from 'react';
import './business.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


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
  linkToBiz='default'
}) => {
  return (
    <div className="business-card">
      <div className="business-image">
        <img src={require('./PandaImg.jpg')} alt={`${name} Image`} />
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

