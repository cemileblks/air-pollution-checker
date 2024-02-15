import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function SearchButton({ onSearch }) {
  const [cityName, setCityName] = useState('');
  const navigate = useNavigate();


  const handleChange = (event) => {
    setCityName(event.target.value.trim());
  };


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };


  const handleSearch = () => {
    onSearch(cityName);
    navigate(`/city/${cityName}`); // navigate to city page on search
  };


  return (
    <div className="search_bar--container">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <TextField
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
          label="Type your city name"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <Button variant="contained" sx={{display: 'block'}}onClick={handleSearch}>Search</Button>
      </Box>
    </div>
  );
}


export default SearchButton;
