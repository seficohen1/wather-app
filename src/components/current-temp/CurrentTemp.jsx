import React, { useContext } from 'react';
import { WeatherContext } from '../../contexts/weather.context';
import './CurrentTemp.css';

const CurrentTemp = () => {
  const { weather } = useContext(WeatherContext);

  const { city, description, temp } = weather;
  return (
    <div className="current-temp-container">
      <div className="city-info-temp">
        <h3>{city}</h3>
        <p>{temp} &#8451;</p>
      </div>
      <div className="weather-description">
        <h5>{description}</h5>
      </div>
    </div>
  );
};

export default CurrentTemp;
