import React from 'react';
import './AdditionalInfo.css';

const AdditionalInfo = ({ feelsLike, high, low }) => {
  return (
    <div className="addional-info-container">
      <div className="info">
        <span>{feelsLike} &#8451;</span>
        <p>High</p>
        <div className="border"></div>
      </div>
      <div className="info">
        <span>{high} &#8451;</span>
        <p>Low</p>
      </div>
      <div className="info">
        <span>{low} &#8451;</span>
        <p>Feels Like</p>
      </div>
    </div>
  );
};

export default AdditionalInfo;
