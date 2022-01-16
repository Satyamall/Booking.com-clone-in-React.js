import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function SearchBar({suggestions, onChange}) {
    return (<Autocomplete
            sx={{
                width: 402, outlineColor: 'white', outlineWidth: 0, borderColor: 'white', height: 35, marginTop: -1
            }}
            freeSolo
            disableClearable
            options={suggestions.map((option) => option.city)}
            onChange={(event, value) => onChange(value)}
            renderInput={(params) => <TextField {...params} label="Where are you going?"
                                                InputProps={{
                                                    ...params.InputProps, type: 'search',
                                                }}/>}
        />);
}
