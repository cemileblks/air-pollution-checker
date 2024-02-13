import React, { useEffect, useState } from 'react';
import './CityMap.css';
import maplibre from 'maplibre-gl';
import Search from '../../pages/Search'
import GetLatLong from '../GetLatLong/GetLatLong';

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

        const { lat, lon } = await GetLatLong(cityName);
        if (lat && lon) {
            setInitialState({
                ...initialState,
                lng: lon,
                lat: lat
            });
        }

        const map = new maplibre.Map({
            container: 'map-container',
            style: `${mapStyle}?apiKey=${myAPIKey}`,
            center: [lon, lat], // lon lat from user city search
            zoom: initialState.zoom
        });

        setMap(map);
    }

    //call to stat map from geoapify documentaion
    useEffect(() => {
        // some inital placeholder city
        initializeMap('London');

    }, []);

    const handleCitySearch = async (cityName) => {
        await initializeMap(cityName);
    }

    return (
        <div className="map-container" ref={el => mapContainer = el}>
            <Search onCitySearch={handleCitySearch} />
        </div>
    )


}


export default CityMap;