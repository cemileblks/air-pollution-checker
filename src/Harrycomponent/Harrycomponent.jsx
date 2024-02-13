import { useState, useEffect } from "react";
import { format } from "date-fns"; // Importing the format function from date-fns
import { BarChart } from "@mui/x-charts/BarChart";

export default function Harrycomponent() {
  const [location, setLocation] = useState("");
  const [pollution, setPollution] = useState({});
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      setLocation(e.target[0].value);
    } catch (err) {
      console.log(err);
    }
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
              // Date formatting code starts here
              var date = new Date();
              var formattedDate = format(date, "MMMM do, yyyy H:mma");
              console.log(formattedDate);
              // Date formatting code ends here

              console.log(result);
              console.log(Object.values(result.list[0].components));
              setPollution(result.list[0].components);
            })
            .catch((error) => console.log("error", error));
        })
        .catch((error) => console.log("error", error));
    }
  }, [location]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="query" />
        <button type="submit">Search</button>
      </form>
      <div>
        <BarChart
          series={[
            { data: [35, 44, 24, 34] },
            { data: [51, 6, 49, 30] },
            { data: [15, 25, 30, 50] },
            { data: [60, 50, 15, 25] },
          ]}
          height={290}
          xAxis={[{ data: ["2/13/24", "Q2", "Q3", "Q4"], scaleType: "band" }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      </div>
    </div>
  );
}
//Get location information from the user -
//Pollution/air quality information to show once user inputs there information
//Take the data from the API - transfer to chart
