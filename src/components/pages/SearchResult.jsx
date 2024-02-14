import React, { useState, useEffect } from "react";

const SearchResult = ({ cityName }) => {
    const [airQualityIndex, setAirQualityIndex] = useState(null);
    const [airPollutionComponents, setAirPollutionComponents] = useState(null);
    const apiKey = "d9703433ae7d3f7be9641b8f32e3d892";

    useEffect(() => {
        fetchPollutionData(cityName);
    }, [cityName]);

    const getCoordinatesByCityName = async (cityName) => {
        const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.length > 0) {
            const { lat, lon } = data[0];
            return { latitude: lat, longitude: lon };
        } else {
            throw new Error('City not found');
        }
    }

    const fetchPollutionData = async (cityName) => {
        try {
            const coordinates = await getCoordinatesByCityName(cityName);
            const { latitude, longitude } = coordinates;
            const apiUrl = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const airQualityInfo = data.list[0].main.aqi;
            const airQualityComponentsData = data.list[0].components;
            setAirQualityIndex(airQualityInfo);
            setAirPollutionComponents(airQualityComponentsData);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div>
            {airQualityIndex !== null && airPollutionComponents !== null && (
                <>
                    <p>Air Pollution Banding for {cityName} is {airQualityIndex}</p>
                    <p>CO: {airPollutionComponents.co}</p>
                    <p>NO: {airPollutionComponents.no}</p>
                    <p>NO2: {airPollutionComponents.no2}</p>
                    <p>SO2: {airPollutionComponents.so2}</p>
                </>
            )}
        </div>
    );
}

export default SearchResult;






// import { useState, useEffect } from "react";

// const SearchResult = ({cityName}) => {
//     const [inputValue, setInputValue] = useState("")
//     const [airQualityIndex, setAirQualityIndex] = useState(null)
    
//     const apiKey = "d9703433ae7d3f7be9641b8f32e3d892"

//     const getCoordinatesByCityName = async(cityName)=>{
//         const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;
      
//         return fetch(apiUrl)
//           .then(response => {
//             if (!response.ok) {
//               throw new Error('Network response was not ok');
//             }
           
//             return response.json();
//           })
//           .then(data => {
//             if (data.length > 0) {
//               const { lat, lon } = data[0];
//               return { latitude: lat, longitude: lon };
//             } else {
//               throw new Error('City not found');
//             }
//           });
//     }

//     function fetchPollutionData(cityName){
        
//        getCoordinatesByCityName(cityName)
//     .then(coordinates => {
//       const { latitude, longitude } = coordinates;
      
//       const apiUrl = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

//       return fetch(apiUrl);
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//         console.log(data)
//       // Handle air pollution forecast data
//     //   console.log(data.list[0]);
//     //   console.log(data.list[0].main.aqi)

//       const airQualityInfo = data.list[0].main.aqi
//       setAirQualityIndex(airQualityInfo)
//       console.log(airQualityIndex) ////

//       const airQualityComponentsData = data.list[0].components.co
//       console.log(airQualityComponentsData)
//     })


//     .catch(error => {
//       // Handle errors
//       console.error('Error:', error);
//     });
        
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         fetchPollutionData(inputValue)
//     }

//     return ( 
//     <div>
//       <p>`Air Pollution Banding for ${cityName} is ${value}`</p>
//     </div>
//      );
// }
 
// export default SearchResult;


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

// function fetchAirPollutionForecast(cityName) {
//   getCoordinatesByCityName(cityName)
//     .then(coordinates => {
//       const { latitude, longitude } = coordinates;
//       const apiUrl = `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

//       return fetch(apiUrl);
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       // Handle air pollution forecast data
//       console.log(data);
//     })
//     .catch(error => {
//       // Handle errors
//       console.error('Error:', error);
//     });
// }
