import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

function CityIndividual() {
  const { cityId } = useParams();

  return (
    <>
      City ID: {cityId}
      <section className="section--container" id="cityIndividual">
        <div className="card_image--wrapper">
          <img src='/images/sample/img_card01.png' alt='' />
        </div>
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
