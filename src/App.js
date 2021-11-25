import React, { useState, useEffect } from 'react';
import './App.css';

import CurrentTemp from './components/current-temp/CurrentTemp.jsx';
import SearchBar from './components/search-bar/SearchBar.jsx';
import AdditionalInfo from './components/addional-info/AdditionalInfo';
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('madrid');
  useEffect(() => {
    const fetchWeather = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`;
      try {
        const respnse = await fetch(url);
        const data = await respnse.json();
        setWeather({
          temp: Math.floor(data.main.temp),
          feelsLike: Math.floor(data.main.feels_like),
          tempMax: Math.floor(data.main.temp_max),
          tempMin: Math.floor(data.main.temp_min),
          city: data.name,
          country: data.sys.country,
          icon: data.weather[0].icon,
          description: data.weather[0].main,
        });
      } catch (error) {
        alert(error);
      }
    };
    fetchWeather();
  }, [city]);
  const cold = weather.temp < 10 ? true : false;

  return (
    <div className={`App ${cold ? 'cold' : 'warm'}`}>
      <main>
        <CurrentTemp weather={weather} />
        <AdditionalInfo
          feelsLike={weather.feelsLike}
          high={weather.tempMax}
          low={weather.tempMin}
        />
        <SearchBar setCity={setCity} city={city} />
      </main>
    </div>
  );
}

export default App;
