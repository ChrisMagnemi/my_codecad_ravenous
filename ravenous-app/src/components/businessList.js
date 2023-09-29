import React from 'react';
import Business from './business'
import './businessList.css'

class BusinessList extends React.Component {
    render() {
        return (
            <div className="business-list">
                {
                    this.props.businesses.map((business) => (
                        <Business key={business.id} business={business} />
                    ))
                }
            </div>
        )
    }
};

// -- Original BusinessList component code --
// const BusinessList = ({ businesses }) =>{
//     return (
        // <div className="business-list">
        //     {businesses.map((business, index) => (
        //         <Business key={index} {...business} />
        //     ))}
        // </div>
//     );
// };

export default BusinessList;