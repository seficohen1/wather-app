import React from 'react';
import './WeatherVid.css';
import CloudsVid from '../../videos/clouds.mp4';
import ClearVid from '../../videos/Sunny.mp4';
import RainVid from '../../videos/rain.mov';

const weatherOptions = {
  Rain: RainVid,
  Clouds: CloudsVid,
  Clear: ClearVid,
  Thunderstorm: '',
  Drizzle: '',
  Snow: '',
  Mist: '',
  Smoke: '',
  Haze: '',
  Dust: '',
};

const WeatherVid = ({ description }) => {
  const vidUrl = weatherOptions[description];
  console.log(description);
  console.log(vidUrl);
  return (
    <div className="weather-vid">
      <video loop autoPlay muted>
        <source src={ClearVid} type="video/mp4" />
      </video>
    </div>
  );
};

export default WeatherVid;
