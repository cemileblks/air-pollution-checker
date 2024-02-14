import React from "react";
import {Link} from "react-router-dom";

// Mui
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// Creating hover theme globally
import { createTheme, ThemeProvider } from '@mui/material/styles';

// City pictures
import CityPhotoSearch from './CityPhotoSearch'

// Ranking Data
import RankingBest from '../../assets/data/bestCities.json'
import RankingWorst from '../../assets/data/worstCities.json'

const themedCard = createTheme({
  components: {
    MuiCard:{
      styleOverrides: {
        root: {
          transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
          borderRadius: '20px',
          '&:hover': {
            transform: 'scale(1.025)',
            opacity: 0.7,
            cursor: 'pointer'
          }
        }
      }
    },
    MuiCardContent:{
      styleOverrides: {
        root: {
          background: '#303947',
        }
    }},
    MuiTypography:{
      styleOverrides: {
        root: {
          color: '#a1a1a1'
        }
    }},
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: '#a1a1a1',
          '& p': {
            color: '#a1a1a1',
          },
        },
      },
    }
  }
})


class Cities extends React.Component{
  render(){
    return (
      <>
      <h2 className='city_ranking--header'>The cleanest cities</h2>
      <Container sx={{display: 'flex'}}className={'card--container'}>
        <ThemeProvider theme={themedCard}>
        {RankingBest.map((city, index)=>
          index < 1 &&(
          <Link to={`/city/${city.Rank}`} key={city.Rank}>
              <Card sx={{ width: 315 }}>
                <React.Fragment>
                  <CityPhotoSearch data={RankingBest} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'left', color: '#ffffff'}}>
                    {city.Rank}: {city.cityCountry}
                    </Typography>
                    <Typography variant="body2" sx={{textAlign: 'left'}}>
                      AQI SCORE: {city.AQI_US}
                    </Typography>
                    {/* <Typography variant="body2" sx={{textAlign: 'left'}}>
                      Some pollution Number
                    </Typography> */}
                  </CardContent>
                  </React.Fragment>
                </Card>
            </Link>
          ))}
          </ThemeProvider>
      </Container>
      <h2 className='city_ranking--header'>Most polluted cities</h2>
      <Container sx={{display: 'flex'}}className={'card--container'}>
        <ThemeProvider theme={themedCard}>
        {RankingWorst.map((city, index)=>
          index < 1 && (
          <Link to={`/city/${city.id}`} key={city.id}>
              <Card sx={{ width: 315 }}>
                <React.Fragment>
                  <CityPhotoSearch data={RankingWorst} />
                  {/* <CardMedia
                    component="img"
                    alt="green iguana"
                    height="300"
                    image={city.imgUrl}
                    /> */}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'left', color: '#ffffff'}}>
                    {city.Rank}: {city.cityCountry}
                    </Typography>
                    <Typography variant="body2" sx={{textAlign: 'left'}}>
                      {city.desc}
                    </Typography>
                    <Typography variant="body2" sx={{textAlign: 'left'}}>
                      AQI SCORE: {city.AQI_US}
                    </Typography>
                  </CardContent>
                  </React.Fragment>
                </Card>
            </Link>
          ))}
          </ThemeProvider>
      </Container>
      </>
    )
  }
}
export default Cities;
