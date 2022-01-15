import * as React from 'react';
import {styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material";
import Paper from '@mui/material/Paper';
import SearchBox from "../Search/Search";

const StyledToolbar = styled(Toolbar)(({theme}) => ({
    alignItems: 'flex-start',
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 128,
    },
    marginTop: '-2%',
}));

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    boxShadow: 'none',
    backgroundColor: '#003580',
}));

export default function () {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" style={{background: '#003580', height: '25vh'}}>
                <Box sx={{
                    ml: 20,
                    mr: 20,
                    width: '105vw',
                    height: '35vh'
                }}>
                    <StyledToolbar>
                        <Grid container>
                            <Grid item xs={12}>
                                <Item>
                                    <Typography
                                        variant="h5"
                                        noWrap
                                        component="div"
                                        align="left"
                                        sx={{flexGrow: 1, color: "white"}}
                                    >
                                        <h1 className="First_secth1">Find your next stay</h1>
                                    </Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={12}>
                                <Item>
                                    <Typography
                                        variant="h5"
                                        noWrap
                                        component="div"
                                        align="left"
                                        sx={{flexGrow: 1, color: "white", marginTop: '-4%'}}
                                    >
                                        <p>Search deals on hotels.homes, and much more...</p>
                                    </Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={12}>
                                <Item>
                                    <SearchBox/>
                                </Item>
                            </Grid>
                        </Grid>
                    </StyledToolbar>
                </Box>
            </AppBar>
        </Box>)
}