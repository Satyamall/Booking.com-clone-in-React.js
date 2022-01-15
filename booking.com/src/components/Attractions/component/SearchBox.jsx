import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import styles from '../style/style.module.css';
import SearchIcon from '@mui/icons-material/Search';


export default function SearchBox() {
  return (
    <Paper
    className={styles.searchInputBox}
      component="form"
      sx={{  display: 'flex', alignItems: 'center', width: "70%" }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
      <SearchIcon />
      </IconButton>
          <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Destinations, museums, tours..."
        inputProps={{ 'aria-label': 'Destinations, museums, tours...' }}
      />
      <Button variant="contained" className={styles.searchButton}>Search</Button>
      </Paper>
  );
}
