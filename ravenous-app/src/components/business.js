import React from 'react';
import './business.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const Business = ({
  image,
  name,
  address,
  city,
  state,
  zipcode,
  category,
  rating,
  reviewCount,
  linkToBiz='default'
}) => {
  return (

    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={image}
          title="img title here"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='business-name'>
            {name}
          </Typography>
          <Typography variant="body1" >
            {category} | {rating} on {reviewCount} reviews
          </Typography>
          <Typography variant="body2" color="text.secondary" className='business-address'>
          {address}, {city}, {state} {zipcode}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"><a href='{linkToBiz}'>Open</a> </Button>
          <Button size="small"> btn2</Button>
        </CardActions>
      </Card>

  );
};

export default Business;

