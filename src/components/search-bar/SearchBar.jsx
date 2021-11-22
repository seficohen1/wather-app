import React, { useContext } from 'react';
import './SearchBar.css';
import { WeatherContext } from '../../contexts/weather.context.js';
let searchedCity;

const SearchBar = () => {
  const { city, setCity } = useContext(WeatherContext);
  const handleChange = (e) => {
    searchedCity = e.target.value;
  };

  const getCity = () => {
    !searchedCity || city.code === '404'
      ? alert('Please try again')
      : setCity(searchedCity);
  };
  console.log(city);
  return (
    <div>
      <input
        type="text"
        name={city}
        placeholder="search"
        onChange={handleChange}
      />
      <label htmlFor="">city</label>
      <br />
      <button onClick={getCity}>search city</button>
    </div>
  );
};

export default SearchBar;
