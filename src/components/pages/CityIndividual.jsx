import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CityMap from "../Features/CityMap/CityMap";
import SearchResult from "./SearchResult";
// import Actions from "../Features/Actions";
import getAdviceForCity from "../Features/GetAdviceForCity";
import Harrycomponent from "../../Harrycomponent/Harrycomponent";

// MUI design
import { Box, Container, Grid, Paper, Typography } from '@mui/material';


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
      <section className="section--container" id="cityIndividual">
      <Typography variant="h4" component="h1" gutterBottom>
      Air pollution in {cityName}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 2, height: '450px' }}>
            <CityMap cityName={cityName} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2, height: '450px' }}>
          <Typography variant="h4">General information</Typography>
            <SearchResult cityName={cityName} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 2, mb: 2,height: '400px' }}>
            <Typography variant="h6">Air pollution charts</Typography>
            <Harrycomponent />
          </Paper>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h4">Health activity encouragement</Typography>
            <div className="card_desc--wrapper">
              {" "}
              {advice && (
                <div>
                  <h2>{cityName}:</h2>
                  {advice}
                </div>
              )}
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
          <Typography variant="h4">Friendly Reminder</Typography>
            <Typography variant="h6">
            <div className="card_desc--wrapper" style={{ marginTop: "20px" }}>
              Our chart visually represents comprehensive air pollution data for the
              selected country. It provides insights into various pollutants such as
              carbon monoxide (CO), ozone (O3), and others, offering a clear
              snapshot of the air quality situation. You can easily grasp the levels
              of different pollutants, aiding in understanding environmental
              conditions and make informed decision-making for health and well-being
            </div>
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      </section>
    </>
  );
}

export default CityIndividual;
