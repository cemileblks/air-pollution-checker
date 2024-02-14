import { useState, useEffect } from "react";

const SearchCity = () => {
    const [inputValue, setInputValue] = useState("")
    const [airQualityIndex, setAirQualityIndex] = useState(null)

    function handleInputChange(event) {
        setInputValue(event.target.value)
        
    }
    
    const apiKey = "d9703433ae7d3f7be9641b8f32e3d892"

    function getCoordinatesByCityName(cityName) {
        const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;
      
        return fetch(apiUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            if (data.length > 0) {
              const { lat, lon } = data[0];
              return { latitude: lat, longitude: lon };
            } else {
              throw new Error('City not found');
            }
          });
    }

    function fetchPollutionData(cityName){
        //
        getCoordinatesByCityName(cityName)
    .then(coordinates => {
      const { latitude, longitude } = coordinates;
      const apiUrl = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

      return fetch(apiUrl);
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
        // console.log(data)
      // Handle air pollution forecast data
    //   console.log(data.list[0]);
    //   console.log(data.list[0].main.aqi)

      const airQualityInfo = data.list[0].main.aqi
      setAirQualityIndex(airQualityInfo)
      console.log(airQualityIndex) ////

      const airQualityComponentsData = data.list[0].components.co
      console.log(airQualityComponentsData)
    })


    .catch(error => {
      // Handle errors
      console.error('Error:', error);
    });
        
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetchPollutionData(inputValue)
    }

    return ( 
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Type a city name to search" 
            onChange={handleInputChange} 
        />
        <button type="submit">Search</button>
    </form>
     );
}
 
export default SearchCity;


///////
// const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

// function getCoordinatesByCityName(cityName) {
//   const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;

//   return fetch(apiUrl)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       if (data.length > 0) {
//         const { lat, lon } = data[0];
//         return { latitude: lat, longitude: lon };
//       } else {
//         throw new Error('City not found');
//       }
//     });
// }

function fetchAirPollutionForecast(cityName) {
  getCoordinatesByCityName(cityName)
    .then(coordinates => {
      const { latitude, longitude } = coordinates;
      const apiUrl = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

      return fetch(apiUrl);
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Handle air pollution forecast data
      console.log(data);
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error);
    });
}




// Example usage:
// fetchAirPollutionForecast('London');

// import React from "react";
// import TextField from '@mui/material/TextField';
// import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
// import InputAdornment from '@mui/material/InputAdornment';
// import SearchIcon from '@mui/icons-material/Search';

// const filter = createFilterOptions();

// function SearchCity(){
//   const [value, setValue] = React.useState(null);
// //   const [cityName, setCityName] = React.useState("")
    
//   return (
//     <div className="search_bar--container">
//       <Autocomplete
//         value={value}
//         onChange={(event, newValue) => {
//             // setCityName(event.target.value)
//             // console.log(cityName)
//           if(typeof newValue === "string") {
//             setValue({
//               city: newValue,
//             });
//           } else if (newValue && newValue.inputValue) {
//             // Create a new value from the user input
//             setValue({
//               city: newValue.inputValue,
//             });
//           } else {
//             setValue(newValue);
//           }
//           console.log(value)
//         }}
//         filterOptions={(options, params) => {
//           const filtered = filter(options, params);

//           const { inputValue } = params;
//           // Suggest the creation of a new value
//           const isExisting = options.some((option) => inputValue === option.city);
//           if (inputValue !== '' && !isExisting) {
//             filtered.push({
//               inputValue,
//               city: `Add "${inputValue}"`,
//             });
//           }

//           return filtered;
//         }}
//         selectOnFocus
//         clearOnBlur
//         handleHomeEndKeys
//         id="search-city"
//         options={cityNames}
//         getOptionLabel={(option) => {
//           // Value selected with enter, right from the input
//           if (typeof option === 'string') {
//             return option;
//           }
//           // Add "xxx" option created dynamically
//           if (option.inputValue) {
//             return option.inputValue;
//           }
//           // Regular option
//           return option.city;
//         }}
//         renderOption={(props, option) => <li {...props}>{option.city}</li>}
//         sx={{ width: 300}}
//         className={'search_bar--inner'}
//         renderInput={(params) => (
//           <TextField {...params}
//           label="Type a city name"
//           sx={{
//             '.MuiOutlinedInput-root': {
//               paddingRight: '15px !important'
//             }
//             }}
//           InputProps={{
//             ...params.InputProps,
//             endAdornment: (
//               <InputAdornment position="end">
//                 <SearchIcon onClick={(event) => console.log(value)} />
//               </InputAdornment>
//             ),
//           }} />
//         )}
//       />
//     </div>
//   )
// }

// const cityNames = [
//   { city: 'London', country: 'UK' },
//   { city: 'Accra', country: 'Ghana' },
//   { city: 'Tema', country: 'Ghana' },
//   { city: 'Tadi', country: 'Ghana' },
//   { city: 'HO', country: 'Ghana' }
// ]
// export default SearchCity;
