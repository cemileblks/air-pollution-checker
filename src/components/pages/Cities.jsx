import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

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
      {cityData.map((city)=>(
        <Card sx={{ maxWidth: 345 }} key={city.id}>
          <React.Fragment>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              image={city.imgUrl}
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'left'}}>
                {city.cityName}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{textAlign: 'left'}}>
                {city.desc}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{textAlign: 'left'}}>
                Some pollution Number
              </Typography>
            </CardContent>
            </React.Fragment>
        </Card>
      ))}
    </Container>
  )
}
export default Cities;
