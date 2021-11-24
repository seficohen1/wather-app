import React from 'react';
import './SearchBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
let searchedCity;

const SearchBar = ({ setCity, city }) => {
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
