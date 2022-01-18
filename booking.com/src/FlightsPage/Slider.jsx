import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

function calculateValue(value) {
  return  value++;
}

export default function LinearSlider() {
  const [value, setValue] = React.useState(10);

  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="non-linear-slider" gutterBottom>
        {calculateValue(value)} hours
      </Typography>
      <Slider
        value={value}
        min={1}
        step={1}
        max={60}
        scale={calculateValue}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>
  );
}
