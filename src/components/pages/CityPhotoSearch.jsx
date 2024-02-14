import React, { useState, useEffect } from 'react';
import axios from 'axios'

const API_KEY = 'AIzaSyBGo_pfiPQmDNs2XAGpDoFLcs4dGj5xz1Q'

let NAME = ''
let PARAMS = 'maxHeightPx=400&maxWidthPx=400'

const url = `/v1/${NAME}/media?key=${API_KEY}&${PARAMS}`


// for debug
NAME = 'liverpool'

function CityPhotoSearch(){
  const [apiData, setData] = useState(null);
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await axios.get(url, {
          headers:{
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': {API_KEY},
            'X-Goog-FieldMask': 'id,displayName,photos',
          }
        });
        setData(response.data)
      } catch(error){
        console.log('Error in the fetch data', error)
      }
    }
    fetchData();
  }, []);
  console.log(apiData)

  return (
    <div>
      {/* {apiData ? (
        <pre>{JSON.stringify(apiData, null, 2)}</pre>
      ) : ( */}
        <p>Loading ...</p>
      {/* )} */}
    </div>
  )
}

export default CityPhotoSearch
