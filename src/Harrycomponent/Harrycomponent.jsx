import { useState, useEffect } from "react";
export default function Harrycomponent() {
  const [location, setLocation] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    setLocation(e.target[0].value);
  };

  useEffect(() => {
    if (location) {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=ab0509029ed1dc73eec6975abe27b2b9`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result[0].lat);
          console.log(result[0].lon);
          let lat = result[0].lat;
          let lon = result[0].lon;
          var requestOptions = {
            method: "GET",
            redirect: "follow",
          };

          fetch(
            `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${lat}&lon=${lon}&start=1706745600&end=1707264000&appid=ab0509029ed1dc73eec6975abe27b2b9`,
            requestOptions
          )
            .then((response) => response.json())
            .then((result) => {
              console.log(result.list[0].components);
            })
            .catch((error) => console.log("error", error));
        })
        .catch((error) => console.log("error", error));
    }
  }, [location]);

  return (
    <form onSubmit={handleSubmit}>
      <input name="query" />
      <button type="submit">Search</button>
    </form>
  );
}
//Get location information from the user -
//Pollution/air quality information to show once user inputs there information
//Take the data from the API - transfer to chart
