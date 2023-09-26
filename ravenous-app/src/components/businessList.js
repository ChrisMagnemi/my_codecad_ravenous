import React from 'react';
import Business from './business'

const BusinessList = ({ businesses }) =>{
    return (
        <div className="business-list">
            {businesses.map((business, index) => (
                <Business key={index} {...business} />
            ))}
        </div>
    );
};

export default BusinessList;