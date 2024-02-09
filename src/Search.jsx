import React, { useState, useEffect} from 'react'



const Search = () => {
    fetch("http://api.airvisual.com/v2/city?city=Los Angeles&state=California&country=USA&key=c5ec8ff6-cbcc-4a22-b3a2-9ea01eaa2ac7")
     .then((response) => {
        return response.json();
     })
     .then((data) =>{
        // console.log(data)
     })

     const [searchCityName, SetSearchCityName] = useState("")

     const handleChange = (e) => {
        e.preventDefault();
        SetSearchCityName(e.target.value); 
        SetSearchCityName(data.city);
        SetSearchCityName(data.state);
        SetSearchCityName(data.country);
     };

  
    return ( 
      <div>
        <input type="search" 
        value={searchCityName} 
        onChange={handleChange} 
        placeholder='Type City Name to Search'/>

{/* {data.map((data, index) =>{
         <div>
         <button>{data.city}</button>
         <button>{data.state}</button>
         <button>{data.country}</button>
         </div>
        })}
      </div> */}

       </div>
     );
}
 
export default Search;