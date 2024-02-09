import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

// Creating hover theme globally
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

const cityData = [
  {
    id: 1,
    cityName: 'London',
    desc: 'Some pollution Number',
    imgUrl: '/images/sample/img_card01.png',
  },
  {
    id: 2,
    cityName: 'Tokyo',
    desc: 'Some pollution Number',
    imgUrl: '/images/sample/img_card02.png',
  },
  {
    id: 3,
    cityName: 'Paris',
    desc: 'Some pollution Number',
    imgUrl: '/images/sample/img_card03.png',
  },
  {
    id: 4,
    cityName: 'Rome',
    desc: 'Some pollution Number',
    imgUrl: '/images/sample/img_card03.png',
  },
  {
    id: 5,
    cityName: 'Beijin',
    desc: 'Some pollution Number',
    imgUrl: '/images/sample/img_card02.png',
  },
  {
    id: 6,
    cityName: 'Seoul',
    desc: 'Some pollution Number',
    imgUrl: '/images/sample/img_card01.png',
  }
]

function Cities(){
  return (
    <Container sx={{display: 'flex'}}className={'card--container'}>
      {/* <CssBaseline /> */}
      {cityData.map((city)=>(
        <ThemeProvider theme={themedCard}>
          <Card sx={{ width: 315 }} key={city.id}>
            <React.Fragment>
              <CardMedia
                component="img"
                alt="green iguana"
                height="300"
                image={city.imgUrl}
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'left', color: '#ffffff'}}>
                  {city.cityName}
                </Typography>
                <Typography variant="body2" sx={{textAlign: 'left'}}>
                  {city.desc}
                </Typography>
                <Typography variant="body2" sx={{textAlign: 'left'}}>
                  Some pollution Number
                </Typography>
              </CardContent>
              </React.Fragment>
            </Card>
        </ThemeProvider>
        ))}
    </Container>
  )
}
export default Cities;
