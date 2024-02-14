import React, { useState, useEffect } from 'react';
import axios from 'axios'
import CardMedia from '@mui/material/CardMedia';
import bestCities from '../../assets/data/bestCities.json';
import worstCities from '../../assets/data/worstCities.json';

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_API_KEY

// random Index
function getRandomIndex(dataLength){
  const randomIndex = Math.floor(Math.random() * dataLength);
  return randomIndex
}

const top5 = bestCities.slice(0, 5)
const worst5 = worstCities.slice(0, 5)

const combinedCities = [...top5, ...worst5]

// // fetchImage url
async function fetchCityImage(cityName){
  // console.log(`Fetching image for: ${cityName}`);
  const url = `https://api.unsplash.com/search/photos?query=${cityName}`

  const cacheKey = `cityImage-${cityName}`;
  const cachedData = localStorage.getItem(cacheKey);

  if(cachedData){
    const {imageUrl, timestamp } = JSON.parse(cachedData);

    // Checking if the data is a day old or not
    const SAVED_DURATION = 1000 * 86400;
    if(new Date().getTime() - timestamp < SAVED_DURATION){
      // console.log(`Retrieving cached image for ${cityName}`);
      return imageUrl;
    }
  }
  // If the cache is expired or is exmpty
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`
      },
    });
 
    const imageUrl = response.data.results[getRandomIndex(response.data.results.length)].urls.small;

    const cacheValue = JSON.stringify({
      imageUrl: imageUrl,
      timestamp: new Date().getTime()
    });
    localStorage.setItem(cacheKey, cacheValue)

    return imageUrl;
  } catch(error){
    console.log('Error on the city picture', error);
    return null
  }
}

function CityPhotoSearch({cityName}){
  // console.log(combinedCities)
  const [imageUrl, setImageUrl] = useState('');

  useEffect(()=>{
    const fetchImage = async() => {
      const imageUrl = await fetchCityImage(cityName);
        setImageUrl(imageUrl);
      };

      if(cityName){
        fetchImage();
      }
    }, [cityName]);

    // Return an image element
    return imageUrl ? <CardMedia
      component="img"
      alt={`An image of ${cityName}`}
      height="300"
      image={imageUrl}
    /> : null;
  }

export default CityPhotoSearch
