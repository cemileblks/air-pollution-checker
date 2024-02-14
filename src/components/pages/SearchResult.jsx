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

export default SearchResult;

