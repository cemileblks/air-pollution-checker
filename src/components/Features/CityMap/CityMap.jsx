import React, { useEffect, useState } from 'react';
import './CityMap.css';
import maplibre from 'maplibre-gl';

function CityMap() {
    let mapContainer;

    useEffect(() => {
      const myAPIKey = 'YOUR_API_KEY_HERE'; 
      const mapStyle = 'https://maps.geoapify.com/v1/styles/osm-carto/style.json';
  
      const initialState = {
        lng: 11,
        lat: 49,
        zoom: 4
      };
  
      const map = new maplibre.Map({
        container: mapContainer,
        style: `${mapStyle}?apiKey=${myAPIKey}`,
        center: [initialState.lng, initialState.lat],
        zoom: initialState.zoom
        });
  
    }, [mapContainer]);
  
    return (
      <div className="map-container" ref={el => mapContainer = el}>
      </div>
    )


}


export default CityMap;