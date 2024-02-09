import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filter = createFilterOptions();

function Search(){
  const [value, setValue] = React.useState(null);

  return (
    <div className="search_bar--container">
      <Autocomplete
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            setValue({
              city: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            setValue({
              city: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some((option) => inputValue === option.city);
          if (inputValue !== '' && !isExisting) {
            filtered.push({
              inputValue,
              city: `Add "${inputValue}"`,
            });
          }


          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={cityNames}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.city;
        }}
        renderOption={(props, option) => <li {...props}>{option.city}</li>}
        sx={{ width: 300 }}
        className={'search_bar--inner'}
        renderInput={(params) => (
          <TextField {...params} label="Type a city name" />
        )}
      />
    </div>
  )
}

const cityNames = [
  { city: 'London', country: 'UK' }
]
export default Search;
