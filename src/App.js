import React, { useState, useEffect } from 'react';
import { WeatherContext } from './contexts/weather.context';
import CurrentTemp from './components/current-temp/CurrentTemp.jsx';
import SearchBar from './components/search-bar/SearchBar.jsx';
import AdditionalInfo from './components/addional-info/AdditionalInfo';
import WeatherVid from './components/weather-vid/WeatherVid';
function App() {
  const API_KEY = 'b6a311958e98b633b6cad1f3de939c35';
  const [weather, setWeather] = useState({
    temp: null,
    feelsLike: null,
    tempMax: null,
    tempMin: null,
    city: '',
    country: '',
    icon: '',
    description: '',
  });
  const [city, setCity] = useState('madrid');
  useEffect(() => {
    console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`;
    const fetchWeather = async () => {
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
        console.log(error);
      }
    };
    fetchWeather();
  }, [city]);

  return (
    <div className="App">
      <WeatherContext.Provider value={{ weather, setWeather, city, setCity }}>
        <WeatherVid description={weather.description} />
        <CurrentTemp />
        <AdditionalInfo
          feelsLike={weather.feelsLike}
          high={weather.tempMax}
          low={weather.tempMin}
        />
        <SearchBar />
      </WeatherContext.Provider>
    </div>
  );
}

export default App;
