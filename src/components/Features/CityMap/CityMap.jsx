import React, { useEffect, useState } from 'react';
import './CityMap.css';
import maplibre from 'maplibre-gl';
import Search from '../../pages/Search'
import GetLatLong from '../GetLatLong';
import GetAirQualityData from '../GetAirQualityData';
import GetCityPolygon from '../GetCityPolygon';

function CityMap() {
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
                    ...initialState,
                    lng: lon,
                    lat: lat
                });
            };

            const mapInstance = new maplibre.Map({
                container: 'map-container',
                style: `${mapStyle}?apiKey=${myAPIKey}`,
                center: [lon, lat], // lon lat from user city search
                zoom: initialState.zoom
            });

            mapInstance.on('style.load', async () => {
                try {
                    // Fetch air quality data
                    const airQualityData = await GetAirQualityData(lat, lon);

                    // Fetch city polygon coordinates
                    const cityPolygon = await GetCityPolygon(lat, lon);

                    // Add color layer on the map based on air quality of the location
                    addColorLayer(mapInstance, airQualityData, cityPolygon);
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
        // some inital placeholder city
        initializeMap('London');

    }, []);

    const handleCitySearch = async (cityName) => {
        await initializeMap(cityName);
    }

    return (
        <div>
            <div className="map-wrapper">
                <div className="map-container" id="map-container"></div>
            </div>
            <Search onCitySearch={handleCitySearch} />
        </div>
    )


}


export default CityMap;