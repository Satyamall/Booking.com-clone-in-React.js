
// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import InputBase from '@mui/material/InputBase';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import styles from './Style.module.css';
// import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
// import TextField from '@mui/material/TextField';
// import DateRangePicker from '@mui/lab/DateRangePicker';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DateRangeIcon from '@mui/icons-material/DateRange';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormGroup from '@mui/material/FormGroup';
// import Checkbox from '@mui/material/Checkbox';


// export default function SearchCar() {
//  const [value, setValue] = React.useState([new Date(), new Date()]);
//   return (
//       <>
//     <FormControl component="fieldset">
//       <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
//         <FormControlLabel value="same" control={<Radio />} label="Return to same location" />
//         <FormControlLabel value="different" control={<Radio />} label="Return to different location" />
//       </RadioGroup>
//     </FormControl>
//     <Paper
//     className={styles.searchInputBox}
//       component="form"
//       sx={{  display: 'flex', alignItems: 'center', width: "70%" }}
//     >
//       <IconButton sx={{ p: '10px' }} aria-label="menu">
//       <DirectionsCarOutlinedIcon />
//       </IconButton>
//           <InputBase
//         sx={{ ml: 1, flex: 1 }}
//         placeholder="Pick-up location"
//         inputProps={{ 'aria-label': 'Pick-up location' }}
//       />
//       <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <DateRangePicker
//         value={value}
//         onChange={(newValue) => {
//           setValue(newValue);
//         }}
//         renderInput={(startProps, endProps) => (
//           <React.Fragment>
//             <TextField  {...startProps}>
//               <DateRangeIcon />
//             </TextField>
//             <TextField {...endProps} />
//           </React.Fragment>
//         )}
//       />
//      </LocalizationProvider>
//       <Button variant="contained" className={styles.searchButton}>Search</Button>
//       </Paper>
//       <FormGroup>
//       <FormControlLabel control={<Checkbox defaultChecked />} label="Driver aged between 30 - 65 " />
//       <label>Driver's age</label>
//       <input type="text" placeholder='Age' className={styles.driver}/>
//       </FormGroup>
//       </>
//   );
// }

// import DateTimePicker from 'react-datetime-picker'
// import { useState } from 'react';
// // import momentLocalizer from 'react-widgets-moment';
//     // import { DateTimePicker } from 'react-widgets';
//     import moment from 'moment';
//     import Datetime from 'react-datetime';

//  export default function SearchCar(){
//   var time=0;
//   var date=new Date();
//   var endDate= new Date();
//   const [openStartTime,setStartTime]=useState([new Date().getTime()])
//   const [endTime,setEndTime]=useState([new Date().getTime()])
//   return(
//     <div>
//        <DateTimePicker
// date={false}
// open={openStartTime}
// timeFormat={'HH:mm'}
// format={'HH:mm'}
// onChange={(e) => {
//     setStartTime(e);
// }}
// value={time}
// min={new Date(new Date().getTime()+ (1000 * 60 * 30) - (new Date().getTime() % 
// (1000 * 60 * 30)))}
// />
// <DateTimePicker
// date={false}
// timeFormat={'HH:mm'}
// format={'HH:mm'}
// onChange={(e) => {
//   setEndTime(e);
// }}
// value={endTime}
// min={moment(endDate).isAfter(date) ? moment(endTime).startOf('day').toDate() : new Date(new Date(time).getTime()+ (1000 * 60 * 30) - (new Date(time).getTime() % (1000 * 60 * 30)))}
// />
//     </div>
//   )
//  }
