
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';

export default function CityCard({id,city,carDetail,fair,image}) {
  return (
      <div style={{width: "350px"}}>
    <Card >
      <CardActionArea>
        <img src={image} alt=""/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {carDetail}
          </Typography>
          <Typography  variant="body2" color="text.secondary">
          <IconButton sx={{ p: '10px' }} aria-label="menu">
             <DirectionsCarOutlinedIcon />   
          </IconButton>
            From ₹ {fair} per day
          </Typography>
          <div style={{ marginTop: 10}}>
              <Link to={`/carrentals/${city}`} style={{textDecoration: "none"}}>Search rental cars in {city}</Link>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
