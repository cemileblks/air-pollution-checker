import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function SearchButton(){
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
        />
      </Box>
    </div>
  )
}
export default SearchButton;
