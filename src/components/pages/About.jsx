import React from "react";
import Box from '@mui/material/Box';
import { Grid, Card, CardContent, Typography, CardMedia} from '@mui/material';

const cardsData = [
  {
    name: 'Balkas, Cemile',
    role: 'Lead / Worked on the map',
    github: 'https://github.com/cemileblks',
    image: 'public/images/pf/cemille.jpeg',
  },
  {
    name: 'Kwamla aglanu, Sampson',
    role: 'Worked on Air pollution data',
    github: 'https://github.com/Sam-Wisdoms',
    image: 'public/images/pf/sampson.jpeg',
  },
  {
    name: ' Ikekeonwu, Obioma',
    role: 'Worked on JSON dataa',
    github: 'https://github.com/obeeyoma',
    image: 'public/images/pf/obioma.png',
  },
  {
    name: 'Harry Hing',
    role: 'Worked on 3D charts',
    github: 'https://github.com/harryh38',
    image: 'public/images/pf/harry.png',
  },
  {
    name: 'Kawamura, Takuy',
    role: 'Worked on the general layout',
    github: 'https://github.com/sebecjeanluc',
    image: 'public/images/pf/tak.jpeg',
  },
];


function About(){
  return (
    <section className="section--wrapper">
      <h2 className='city_ranking--header'>About us</h2>
      <Grid container spacing={4}>
      {cardsData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="250"
              image={card.image}
              alt={card.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.role}
                <br />
                <a rel="noreferrer" href={card.github} target="_blank">Github</a>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </section>
  )
}
export default About;
