import React from 'react';
import './business.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

class Business extends React.Component {
  render () {
    return (
      <div className="business-card">
         <div className="business-image">
           <img src={require('./PandaImg.jpg')} alt={`Image`} />
           <img src={this.props.business.imageSrc} alt="resutantimage" />
         </div>
         <div className="business-details">
           <h2 className="business-name">{this.props.business.name}</h2>
           <p className="business-address">
             {this.props.business.address} {this.props.business.city} {this.props.business.state} {this.props.business.zipCode}
           </p>
           <p className="business-category">{this.props.business.category}</p>
           <div className="business-rating">
             <p className="rating">{this.props.business.rating} stars</p>
             <p className="review-count">{this.props.business.reviewCount} reviews</p>
           </div>
         </div>
       </div>

    );
  }
}

// -- Original Business component code --
// const Business = ({
//   image,
//   name,
//   address,
//   city,
//   state,
//   zipcode,
//   category,
//   rating,
//   reviewCount,
//   linkToBiz='default'
// }) => {
//   return (
//     <div className="business-card">
//       <div className="business-image">
//         <img src={require('./PandaImg.jpg')} alt={`${name} Image`} />
//       </div>
//       <div className="business-details">
//         <h2 className="business-name">{name}</h2>
//         <p className="business-address">
//           {address}, {city}, {state} {zipcode}
//         </p>
//         <p className="business-category">{category}</p>
//         <div className="business-rating">
//           <p className="rating">{rating} stars</p>
//           <p className="review-count">{reviewCount} reviews</p>
//         </div>
//       </div>
//     </div>

//   );
// };

export default Business;

