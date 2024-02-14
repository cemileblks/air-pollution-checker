import React, { useState, useEffect } from 'react';
import axios from 'axios'
import CardMedia from '@mui/material/CardMedia';
import citiesPicSeeds from '/src/assets/data/citiesPicSeeds.json'
import bestCities from '../../assets/data/bestCities.json';
import worstCities from '../../assets/data/worstCities.json';

const ACCESS_KEY = '88gkD0JRYJ21slg9gnkhiOHGnijeLILIdCzDahiyb58'

// // A day to save
// const SAVED_DURATION = 1000 * 86400;

// // Function to save image URL to localStorage
// function saveImageToStorage(cityName, imageUrl){
//   const item = {
//     imageUrl,
//     timestamp: new Date().getTime()
//   };
//   localStorage.setItem(cityName, JSON.stringify(item))
// }

// // Get image from localStorage
// function getImageFromStorage(cityName){
//   const itemString = localStorage.getItem(cityName);
//   if(!itemString){
//     return null;
//   }
//   const item = JSON.parse(itemString)
//   const isExpired = new Date().getTime() - item.timestamp > SAVED_DURATION;
//   if (isExpired){
//     localStorage.removeItem(cityName);
//     return null
//   }
//   return item.imageUrl;
// }

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

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`
      },
    });
    // console.log(response.data);
    // alt_description id
    return response.data.results[getRandomIndex(response.data.results.length)].urls.small;
  } catch(error){
    console.log('Error on the city picture', error);
    return null
  }
}

function CityPhotoSearch(){
  // console.log(combinedCities)
  const [cityImage, setImage] = useState([]);

  useEffect(()=>{
    const fetchImage = async() => {
      const citiesPromises = combinedCities.map(async (city) =>{
        const imageUrl = await fetchCityImage(city.cityCountry);
        return {...city, imageUrl};
      });
      const cityImage = await Promise.all(citiesPromises);
      setImage(cityImage);
    };
    fetchImage();
  },[]);

  return (
    <div className="city_photo--wrapper">
      {/* {citiesPromises.map((city) =>(
        <CardMedia
          component="img"
          key={city.id}
          alt={`Image of ${city.cityCountry}`}
          height="300"
          src={cityImage[city.cityCountry]}
        />
      ))} */}
    </div>
  )
}

export default CityPhotoSearch
