import React, { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import CityMap from "../Features/CityMap/CityMap";
import SearchResult from "./SearchResult";
// import Actions from "../Features/Actions";
import getAdviceForCity from "../Features/GetAdviceForCity";

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
        <div className="card_image--wrapper">
          <img src="/images/sample/img_card02.png" alt="" />
        </div>
        <div className="card_desc--wrapper">
          2 Some informationSome informationSome informationSome informationSome
          informationSome informationSome informationSome information
        </div>
        <div className="card_desc--wrapper">
          2 Some informationSome informationSome informationSome informationSome
          informationSome informationSome informationSome information
        </div>
      </section>
    </>
  );
}

export default CityIndividual;
