import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/image-filename.jpg"
          alt="image description"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Title here
          </Typography>
          <Typography variant="body2" color="text.secondary">
         Information fetched from quality.json file goes here.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
