import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CityMap from "../Features/CityMap/CityMap";
import SearchResult from "./SearchResult";
// import Actions from "../Features/Actions";
import getAdviceForCity from "../Features/GetAdviceForCity";
import Harrycomponent from "../../Harrycomponent/Harrycomponent";

function CityIndividual() {
  const { cityName } = useParams();

  const [advice, setAdvice] = useState(null);
  useEffect(() => {
    const fetchAdvice = async () => {
      try {
        const adviceData = await getAdviceForCity(cityName);
        setAdvice(adviceData);
      } catch (error) {
        console.error("Error fetching advice:", error);
        setAdvice(null);
      }
    };
    fetchAdvice();
  }, [cityName]);
  return (
    <>
      City: {cityName}
      <section className="section--container" id="cityIndividual">
        <SearchResult cityName={cityName} />
        <CityMap cityName={cityName} />
        <div className="card_desc--wrapper">
          {" "}
          {advice && (
            <div>
              <h2>{cityName}:</h2>
              {advice}
            </div>
          )}
        </div>
        <div className="card_desc--wrapper" style={{ marginTop: "20px" }}>
          Our chart visually represents comprehensive air pollution data for the
          selected country. It provides insights into various pollutants such as
          carbon monoxide (CO), ozone (O3), and others, offering a clear
          snapshot of the air quality situation. You can easily grasp the levels
          of different pollutants, aiding in understanding environmental
          conditions and make informed decision-making for health and well-being
        </div>
        <Harrycomponent />
      </section>
    </>
  );
}

export default CityIndividual;
