// Importing useState and useEffect from React
import React, { useState, useEffect } from "react";

// SearchResult component takes cityName as a prop
const SearchResult = ({ cityName }) => {
  // Initializing state variables for air quality index and air pollution components
  const [airQualityIndex, setAirQualityIndex] = useState(null);
  const [airPollutionComponents, setAirPollutionComponents] = useState(null);
  // API key for accessing weather data
  const apiKey = "d9703433ae7d3f7be9641b8f32e3d892";

  // Effect hook to fetch pollution data when cityName changes
  useEffect(() => {
    fetchPollutionData(cityName);
  }, [cityName]);

  // Function to get coordinates based on city name using OpenWeatherMap API
  const getCoordinatesByCityName = async (cityName) => {
    const apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;

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

  // Function to fetch pollution data using coordinates obtained from city name
  const fetchPollutionData = async (cityName) => {
    try {
      const coordinates = await getCoordinatesByCityName(cityName);
      const { latitude, longitude } = coordinates;
      const apiUrl = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Extracting air quality index and components data
      const airQualityInfo = data.list[0].main.aqi;
      const airQualityComponentsData = data.list[0].components;
      // Updating state with fetched data
      setAirQualityIndex(airQualityInfo);
      setAirPollutionComponents(airQualityComponentsData);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  // Mapping air quality index to descriptive labels
  let description;
  switch (airQualityIndex) {
    case 1:
      description = "Low";
      break;
    case 2:
      description = "Moderate";
      break;
    case 3:
      description = "Moderate";
      break;
    case 4:
      description = "High";
      break;
    case 5:
      description = "Very High";
      break;
    default:
      description = "Unknown";
  }
  // Rendering air quality information and pollution components
  return (
    <div>
      <p>Air pollution banding for {cityName} is {description}</p>
      {airPollutionComponents && (
        <div>
          <p>CO: {airPollutionComponents.co}</p>
          <p>NO: {airPollutionComponents.no}</p>
          <p>NO2: {airPollutionComponents.no2}</p>
          <p>SO2: {airPollutionComponents.so2}</p>
        </div>
      )}
    </div>
  );
}

// Exporting SearchResult component
export default SearchResult;

