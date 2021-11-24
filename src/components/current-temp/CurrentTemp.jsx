import React from 'react';

import './CurrentTemp.css';

const CurrentTemp = ({ weather }) => {
  const { city, country, temp, description } = weather;
  return (
    <div className="current-temp-container">
      <div className="city-info-temp">
        <h3>
          {city}, {country}
        </h3>
        <p>{temp} &#8451;</p>
      </div>
      <div className="weather-description">
        <h5>{description}</h5>
      </div>
    </div>
  );
};

export default CurrentTemp;
