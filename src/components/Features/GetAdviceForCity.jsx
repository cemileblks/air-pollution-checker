import React from "react";
import GetLatLong from "./GetLatLong/GetLatLong"; // Importing the function to get latitude and longitude
import GetAirQualityData from "./GetAirQualityData/GetAirQualityData"; //Importing the function to get air quality data
import quality from "../../assets/data/quality.json"; // Importing the advice data

const getAdviceForCity = async (cityName) => {
  try {
    // Get latitude and longitude for the given city
    const { lat, lon } = await GetLatLong(cityName);
    if (!lat || !lon) {
      throw new Error("Failed to fetch latitude and longitude");
    }
    // Get air quality data using latitude and longitude
    const airQualityData = await GetAirQualityData(lat, lon);
    if (!airQualityData) {
      throw new Error("Failed to fetch air quality data");
    }
    // Find advice corresponding to air quality level
    const selectedAdvice = quality.find(
      (item) => item.value === airQualityData.aqi
    );
    if (!selectedAdvice) {
      throw new Error("No advice found for the given air quality level");
    }
    // Return JSX with advice for at-risk persons, general population, andchallenge;
    return (
      <div>
        <h2>At-Risk Persons:</h2>
        <p>{selectedAdvice.at_risk_persons}</p>
        <h2>General Population:</h2>
        <p>{selectedAdvice.general_population}</p>
        <h2>Challenge:</h2>
        <p>{selectedAdvice.challenge}</p>
      </div>
    );
  } catch (error) {
    console.error("Error getting advice:", error);
    return null;
  }
};
export default getAdviceForCity;
