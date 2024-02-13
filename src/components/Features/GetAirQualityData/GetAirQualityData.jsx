import axios from "axios";

//function to get Air Quality data given lat and lon of a location using API
const GetAirQualityData = async (lat, lon) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=c159ba1148ba5d89f87f2d56ab03fa73`);
        console.log(response.data.list[0].main.aqi) // check to see if data is retrived corectly
        return {aqi: response.data.list[0].main.aqi}; // returns object key aqi equals a value from the API
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
};

export default GetAirQualityData