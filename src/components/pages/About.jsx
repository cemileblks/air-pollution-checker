import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Member
      </Typography>
      <Typography variant="h5" component="div">
        Balkas, Cemile
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Lead / Worked on the map
      </Typography>
      <Typography variant="body2">
      <a rel="noreferrer" href='https://github.com/cemileblks' target="_blank">Gitihub</a>
      </Typography>
    </CardContent>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Member
      </Typography>
      <Typography variant="h5" component="div">
        Kwamla aglanu, Sampson
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Worked on Air pollution data
      </Typography>
      <Typography variant="body2">
      <a rel="noreferrer" href='https://github.com/Sam-Wisdoms' target="_blank">Gitihub</a>
      </Typography>
    </CardContent>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Member
      </Typography>
      <Typography variant="h5" component="div">
        Ikekeonwu, Obioma
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Worked on JSON data
      </Typography>
      <Typography variant="body2">
      <a rel="noreferrer" href='https://github.com/obeeyoma ' target="_blank">Gitihub</a>
      </Typography>
    </CardContent>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Member
      </Typography>
      <Typography variant="h5" component="div">
      Harry Hing
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
       Worked on 3D charts
      </Typography>
      <Typography variant="body2">
      <a rel="noreferrer" href='https://github.com/harryh38' target="_blank">Gitihub</a>
      </Typography>
    </CardContent>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Member
      </Typography>
      <Typography variant="h5" component="div">
      Kawamura, Takuya
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Worked on general layout
      </Typography>
      <Typography variant="body2">
        <a rel="noreferrer" href='https://github.com/sebecjeanluc' target="_blank">Gitihub</a>
      </Typography>
    </CardContent>
  </React.Fragment>
);


function About(){
  return (
    <section className="section--wrapper">
      <h2 className='city_ranking--header'>About us</h2>
       <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </section>
  )
}
export default About;
