import axios from "axios";

const GetCityPolygon = async (lat, lon) => {
    const apiKey = 'bc942683c0154ef7af35b4b812414db5';
    const url = `https://api.geoapify.com/v1/boundaries/part-of?lat=${lat}&lon=${lon}&geometry=geometry_10000&apiKey=${apiKey}`;
    
    try {
        const response = await axios.get(url);
        const data = response.data;
        // Extract and return city polygon coordinates from the response
        return data && data.features && data.features[0] && data.features[0].geometry.coordinates;
    } catch (error) {
        console.error('Error fetching city polygon data:', error);
        return null;
    }
};
export default GetCityPolygon;