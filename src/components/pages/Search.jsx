import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SearchButton({ onSearch }) {
  const [cityName, setCityName] = useState('');

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
  };

  return (
    <div className="search_bar--container">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& > :not(style)': { m: 1 },
        }}
      >
        <TextField
          helperText=" "
          id="demo-helper-text-aligned-no-helper"
          label="Name"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <Button variant="contained" onClick={handleSearch}>Search</Button>
      </Box>
    </div>
  );
}

export default SearchButton;
