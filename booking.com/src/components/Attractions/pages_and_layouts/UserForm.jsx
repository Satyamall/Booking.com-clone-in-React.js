import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';




function MyFormHelperText(props) {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return props.value;
    }

    return 'All filed required';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

export default function UserForm() {
  return (
    <Box component="form" noValidate autoComplete="off">
          <FormControl sx={ { width: '40ch' } }>
              <MyFormHelperText value={ "Enter Name"}/>
              <OutlinedInput placeholder="Please enter Name" style={ { width: '100%', height: "40px", margin: "10px" } } value="pradip Mandal"/>
              <MyFormHelperText value={ "Enter Email"}/>
              <OutlinedInput placeholder="Please enter Email" style={ { width: '100%', height: "40px", margin: "10px" } }  value="pradip@gmail.com"/>
              <MyFormHelperText value={ "Confirm email address"}/>
              <OutlinedInput placeholder="confirm Email" style={ { width: '100%', height: "40px", margin: "10px" } } value="pradip@gmail.com"/>
              <MyFormHelperText value={"Enter Phone Number"}/>
              <OutlinedInput placeholder="Enter your Phone" style={{ width: '100%',height:"40px",margin:"10px"}} value="9876543210"/>
      </FormControl>
    </Box>
  );
}
