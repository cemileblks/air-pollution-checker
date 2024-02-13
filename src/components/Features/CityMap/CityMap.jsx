import React, { useEffect, useState } from 'react';
import './CityMap.css';
import maplibre from 'maplibre-gl';
// import Search from '../../pages/Search'
import BoringSearchBox from '../../pages/BoringSearchBox';
import GetLatLong from '../GetLatLong/GetLatLong';
import GetAirQualityData from '../GetAirQualityData/GetAirQualityData';
import GetCityPolygon from '../GetCityPolygon/GetCityPolygon';
import addColorLayer from '../AddColorLayer/AddColorLayer';

function CityMap() {
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
                mapInstance.addControl(new maplibre.NavigationControl());

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

        // inital placeholder city
        initializeMap('London');

        return () => {
            if (map) {
                map.remove();
            }
        };
    }, []);

    const handleCitySearch = async (cityName) => {
        await initializeMap(cityName);
    }

    return (
        <div>
            <div className="map-wrapper">
                <div className="map-container" id="map-container"></div>
            </div>
            <BoringSearchBox onCitySearch={handleCitySearch} />
        </div>
    )


}


export default CityMap;