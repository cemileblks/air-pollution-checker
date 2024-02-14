import { useState, useEffect, Component } from "react";
//import { format } from "date-fns"; // Importing the format function from date-fns
import { BarChart } from "@mui/x-charts/BarChart";
import moment from "moment";
import { useParams } from "react-router-dom";

export default function Harrycomponent() {
  const { cityName } = useParams();
  const currentDate = moment().unix();
  const startDate = moment().subtract(2, "days").unix();
  const [location, setLocation] = useState(() => cityName);
  const [pollution, setPollution] = useState(null); // Initialize pollution as null initially
  const [labels, setLabels] = useState([]);
  const [coDataApi, setcoDataApi] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocation(e.target[0].value);
  };

  useEffect(() => {
    if (location) {
      fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=134a7bca60f2f212f1b9faaf871be508`
      )
        .then((response) => response.json())
        .then((result) => {
          const lat = result[0].lat;
          const lon = result[0].lon;

          fetch(
            `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${lat}&lon=${lon}&start=${startDate}&end=${currentDate}&appid=134a7bca60f2f212f1b9faaf871be508`
          )
            .then((response) => response.json())
            .then((result) => {
              setPollution(result.list);
              const labelsData = result.list.filter((item) => {
                return moment.unix(item.dt).format("hh a") === "12 pm";
              });
              const coData = result.list.filter((item) => {
                return moment.unix(item.dt).format("hh a") === "12 pm";
              });
              setcoDataApi(coData);

              setLabels(labelsData);
              //console.log(labelsData);
              console.log(result.list);
              //console.log(labels);
            })
            .catch((error) => console.log("error", error));
        })
        .catch((error) => console.log("error", error));
    }
  }, [location]);
  //console.log(coDataApi);
  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input name="query" />
        <button type="submit">Search</button>
      </form> */}
      <div>
        {pollution && ( // Render BarChart only when pollution data is available
          <BarChart
            series={[
              {
                data: [coDataApi[0].components.co, coDataApi[1].components.co],
                label: "co",
                //data: [coDataApi[0].components.o3, coDataApi[1].components.o3],
              },
              {
                //data: [coDataApi[0].components.co, coDataApi[1].components.co],
                data: [coDataApi[0].components.o3, coDataApi[1].components.o3],
                label: "o3",
              },
              {
                //data: [coDataApi[0].components.no, coDataApi[1].components.no],
                data: [coDataApi[0].components.no, coDataApi[1].components.no],
                label: "no",
              },
              {
                //data: [coDataApi[0].components.no2, coDataApi[1].components.no2],
                data: [
                  coDataApi[0].components.no2,
                  coDataApi[1].components.no2,
                ],
                label: "no2",
              },
              {
                //data: [coDataApi[0].components.so2, coDataApi[1].components.so2],
                data: [
                  coDataApi[0].components.so2,
                  coDataApi[1].components.so2,
                ],
                label: "so2",
              },
            ]}
            height={290}
            xAxis={[
              {
                data: [
                  moment.unix(labels[0].dt).format("Do"),
                  moment.unix(labels[1].dt).format("Do"),
                ],
                scaleType: "band",
              },
            ]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          />
        )}
      </div>
    </div>
  );
}
//Get location information from the user -
//Pollution/air quality information to show once user inputs there information
//Take the data from the API - transfer to chart
