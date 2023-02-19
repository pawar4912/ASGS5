import React from "react";
import {FaSearch} from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

const SearchBar = () => {
  return (
    <div className="search">
      <input type="text" name="search-field" />
      <Button className='search-btn' >
      <FaSearch />
      </Button>
    </div>
  );
};

export default SearchBar;
