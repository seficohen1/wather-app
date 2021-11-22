import React, { useContext } from 'react';
import './SearchBar.css';
import { WeatherContext } from '../../contexts/weather.context.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
let searchedCity;

const SearchBar = () => {
  const { city, setCity } = useContext(WeatherContext);
  const handleChange = (e) => {
    if (e.code === 'Enter') {
      searchedCity = e.target.value;
      setCity(searchedCity);
    }
    searchedCity = e.target.value;
  };

  const getCity = () => {
    !searchedCity || city.code === '404'
      ? alert('Please try again')
      : setCity(searchedCity);
  };
  console.log(city);
  return (
    <div className="search-bar-container">
      <div className="search">
        <input
          id="bar"
          type="text"
          name={city}
          placeholder="search"
          onChange={handleChange}
          onKeyPress={handleChange}
        />
        <button onClick={getCity}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
