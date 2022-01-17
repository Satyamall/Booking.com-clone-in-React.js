import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import styles from './style/style.module.css';
import SearchIcon from '@mui/icons-material/Search';
import debounceControll from './debounce_search/DebounceControll';
import { useDispatch } from 'react-redux';
import { fetchDebounce } from './debounce_search/fetchDebounce';
import DebouncedCard from './debounce_search/DebouncedCard';


export default function SearchBox( props ) {
  const debounceDisPach = useDispatch();
//hooks used for debounce
  const [ searchData, setSearchData ] = React.useState( false );
  // console.log(searchData)
const debounceOnChange = React.useCallback(debounceControll(onChange, 400), []);

//input onchange event
function onChange(value) {
  debounceDisPach( fetchDebounce( value ) );
  setSearchData( true );
  if ( !value ) {
    setSearchData( false );
}
}

  const style = {
    border: "3px solid #F9B82E"
  }
  return (
    <div>
    <Paper
      style={style}
    className={props.widthStatus? styles.searchInputBox:""}
      component="form"
      sx={{  display: 'flex', alignItems: 'center', width: "70%" }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
      <SearchIcon />
      </IconButton>
          <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Destinations, museums, tours..."
        inputProps={ { 'aria-label': 'Destinations, museums, tours...' } }
        // value={ searchData }
        onChange={e => debounceOnChange(e.target.value)}
      />
      <Button variant="contained" className={ styles.searchButton }>Search</Button>

      </Paper>
      {
        searchData?<DebouncedCard/>:""
      }

    </div>

  );
}
