import React, { useEffect, useState } from 'react';
import './CityMap.css';
import maplibre from 'maplibre-gl';
// import Search from '../../pages/Search'
import GetLatLong from '../GetLatLong/GetLatLong';
import GetAirQualityData from '../GetAirQualityData/GetAirQualityData';
import GetCityPolygon from '../GetCityPolygon/GetCityPolygon';
import addColorLayer from '../AddColorLayer/AddColorLayer';

function CityMap({ cityName }) {
    const [map, setMap] = useState(null);
    const [initialState, setInitialState] = useState({
        lng: -1.0724, //london
        lat: 53.9920,
        zoom: 15,
    })

    // Function to initalize map to be later called in useEffect hook
    const initializeMap = async (cityName) => {
        const myAPIKey = 'bc942683c0154ef7af35b4b812414db5';
        const mapStyle = 'https://maps.geoapify.com/v1/styles/maptiler-3d/style.json';
        try {
            const { lat, lon } = await GetLatLong(cityName);
            if (lat && lon) {
                setInitialState({
                    lng: lon,
                    lat: lat,
                    zoom: 10
                });
            };

            const mapInstance = new maplibre.Map({
                container: 'map-container',
                style: `${mapStyle}?apiKey=${myAPIKey}`,
                center: [lon, lat], // lon lat from user city search
                zoom: 10
            });

            mapInstance.on('style.load', async () => {
                mapInstance.addControl(new maplibre.NavigationControl());

                try {
                    // Fetch air quality data
                    const airQualityData = await GetAirQualityData(lat, lon);

                    // Fetch city polygon coordinates
                    const cityPolygon = await GetCityPolygon(lat, lon);

                    // Add color layer on the map based on air quality of the location
                    addColorLayer(mapInstance, airQualityData, cityPolygon);

                    // Add description to the color presented on map
                    addDescription(mapInstance, airQualityData);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            });

            setMap(mapInstance);

        } catch (error) {
            console.error('Error fetching city coordinates:', error);
        }
    };

    //call to stat map from geoapify documentaion
    useEffect(() => {

        if (cityName) {
            initializeMap(cityName);
        }

        return () => {
            if (map) {
                map.remove();
            }
        };
    }, [cityName]);

    const addDescription = (map, airQualityData) => {
        const { aqi } = airQualityData;
        let description;
   
        switch (aqi) {
            case 1: // Good
                description = `Air pollution banding is Low`;
                break;
            case 2: // Fair
                description = `Air pollution banding is Moderate`;
                break;
            case 3: // Moderate
                description = `Air pollution banding is Moderate`;
                break;
            case 4: // Poor
                description = `Air pollution banding is High`;
                break;
            case 5: // Very Poor
                description = `Air pollution banding is Very High`;
                break;
            default:
                description = `Unknown air quality banding `;
        }
   
        // Checks for if map instance is valid and has center coordinates
        if (map && map.getCenter()) {
            const center = map.getCenter();
            const lon = center.lng;
            const lat = center.lat;
   
            // Checks if lon and lat values are valid numbers
            if (!isNaN(lon) && !isNaN(lat)) {
                // Add description as a popup to the map (maplibre properties)
                const popup = new maplibre.Popup()
                    .setLngLat([lon, lat])
                    .setHTML(description)
                    .addTo(map);
   
                // Set text color to black for readability
                popup.getElement().style.color = 'black';
            } else {
                console.error('Invalid coordinates:', lon, lat);
            }
        } else {
            console.error('Invalid map instance or could not center coordinates:', map);
        }
    };



    return (
        <div>
            {cityName && (
                <div className="map-wrapper">
                    <div className="map-container" id="map-container"></div>
                </div>
            )}
        </div>
    )


}


export default CityMap;