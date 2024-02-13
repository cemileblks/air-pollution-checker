import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import CityMap from '../Features/CityMap/CityMap';

function CityIndividual() {
  const { cityName } = useParams();

  return (
    <>
      City: {cityName}
      <section className="section--container" id="cityIndividual">
        <CityMap cityName={cityName} />
        <div className="card_desc--wrapper">
          1 Some informationSome informationSome informationSome informationSome informationSome informationSome informationSome information
        </div>
        <div className="card_image--wrapper">
          <img src='/images/sample/img_card02.png' alt='' />
        </div>
        <div className="card_desc--wrapper">
          2 Some informationSome informationSome informationSome informationSome informationSome informationSome informationSome information
        </div>
        <div className="card_desc--wrapper">
          2 Some informationSome informationSome informationSome informationSome informationSome informationSome informationSome information
        </div>
      </section>
    </>
  )
}

export default CityIndividual
