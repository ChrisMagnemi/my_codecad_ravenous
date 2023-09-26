import React from 'react';
import Business from './business'
import './businessList.css'

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