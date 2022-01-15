import * as React from 'react';
import {styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Grid} from "@mui/material";
import Paper from '@mui/material/Paper';
import styles from "./Header.module.css";
import HeaderSvg from "./HeaderSvg";
import Paths from "./SvgPaths";

const StyledToolbar = styled(Toolbar)(({theme}) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 128,
    },

}));

const StyledButton = styled(Button)(({theme, color = 'primary'}) => ({
    ':hover': {
        color: theme.palette[color].main,
        backgroundColor: '#0071c2',
    },
    paddingLeft: 15,
    paddingRight: 15,
    textTransform: 'none'
}));

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    boxShadow: 'none',
    width: '100%',
    backgroundColor: '#003580',
}));


export default function Navbar() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" style={{background: '#003580'}}>
                <Box sx={{
                    ml: 20,
                    mr: 20,
                    width: '105vw'
                }}>
                    <StyledToolbar>
                        <Grid container spacing={-47}>
                            <Grid item xs={6}>
                                <Item>
                                    <Typography
                                        variant="h5"
                                        noWrap
                                        component="div"
                                        align="left"
                                        fontWeight='bold'
                                        sx={{flexGrow: 1, marginBottom: 3, color: "white"}}
                                    >
                                        Booking.com
                                    </Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item style={{marginLeft: '-100px'}}>
                                    <div className={styles.navbarUpperSectionItems}>
                                        <ul>
                                            <li className={styles.inr}>
                                                <StyledButton variant="text" style={{
                                                    color: 'white',
                                                    alignSelf: "left",
                                                    marginTop: '-8px'
                                                }}>
                                                    INR
                                                </StyledButton>
                                            </li>
                                            <li className={styles.indianFlag}>
                                                <StyledButton variant="text" style={{
                                                    color: 'white',
                                                    alignSelf: "left",
                                                    marginTop: '-5px'
                                                }}>
                                                    <img
                                                        src="https://cf.bstatic.com/static/img/flags/new/48-squared/in/20aa535a5d3c505dd02fea275ed1a36c0fb1fe08.png"
                                                        alt="india's-flag"/>
                                                </StyledButton>
                                            </li>
                                            <li>
                                                <HeaderSvg path={Paths.questionIcon} styles={styles.questionIcon}/>
                                            </li>
                                            <li className={styles.propertyList}>
                                                <StyledButton variant="outlined"
                                                              style={{color: 'white', alignSelf: "left", height: 35}}>
                                                    List your property</StyledButton>
                                            </li>
                                            {
                                                <li className={styles.signButton}>
                                                    <button>Register</button>
                                                </li>}
                                            {
                                                <li className={styles.signButton}>
                                                    <button>Sign in</button>
                                                </li>
                                            }
                                        </ul>

                                    </div>
                                </Item>
                            </Grid>
                            <Grid item xs={1.5} style={{marginTop: -10, marginLeft: -15}}>
                                <Item>
                                    <StyledButton variant="outlined" style={{
                                        color: 'white',
                                        alignSelf: "left",
                                        borderRadius: 20,
                                        height: 35
                                    }}>
                                        <HeaderSvg path={Paths.staysIcon} styles={styles.svgIcons}/>
                                        <p className={styles.text}>
                                            Stays
                                        </p>
                                    </StyledButton>
                                </Item>
                            </Grid>
                            <Grid item xs={1.5} style={{marginTop: -10, marginLeft: -15}}>
                                <Item>
                                    <StyledButton variant="text" style={{
                                        color: 'white',
                                        alignSelf: "left",
                                        borderRadius: 20,
                                        height: 35
                                    }}>
                                        <HeaderSvg path={Paths.flightIcon} styles={styles.svgIcons}/>
                                        <p className={styles.text}>
                                            Flights
                                        </p>

                                    </StyledButton>
                                </Item>
                            </Grid>
                            <Grid item xs={1.5} style={{marginTop: -10, marginLeft: -15}}>
                                <Item>
                                    <StyledButton variant="text" style={{
                                        color: 'white',
                                        alignSelf: "left",
                                        borderRadius: 20,
                                        height: 35
                                    }}>
                                        <HeaderSvg path={Paths.rentalIcon} styles={styles.svgIcons}/>
                                        <p className={styles.text}>
                                            Rentals
                                        </p>

                                    </StyledButton>
                                </Item>
                            </Grid>
                            <Grid item xs={1.5} style={{marginTop: -10, marginLeft: -10}}>
                                <Item>
                                    <StyledButton variant="text" style={{
                                        color: 'white',
                                        alignSelf: "left",
                                        borderRadius: 20,
                                        height: 35
                                    }}>
                                        <HeaderSvg path={Paths.attractionIcon} styles={styles.svgIcons}/>
                                        <p className={styles.text}>
                                            Attractions
                                        </p>

                                    </StyledButton>
                                </Item>
                            </Grid>
                            <Grid item xs={1.5} style={{marginTop: -10, marginLeft: -5}}>
                                <Item>
                                    <StyledButton variant="text" style={{
                                        color: 'white',
                                        alignSelf: "left",
                                        borderRadius: 20,
                                        height: 35
                                    }}>
                                        <HeaderSvg path={Paths.flightHotelIcon} styles={styles.svgIcons}/>
                                        <p className={styles.text}>
                                            Flight+Hotel
                                        </p>

                                    </StyledButton>
                                </Item>
                            </Grid>
                            <Grid item xs={1.5} style={{marginTop: -10, marginLeft: -10}}>
                                <Item>
                                    <StyledButton variant="text" style={{
                                        color: 'white',
                                        alignSelf: "left",
                                        borderRadius: 20,
                                        height: 35
                                    }}>
                                        <HeaderSvg path={Paths.taxiIcon} styles={styles.svgIcons}/>
                                        <p className={styles.text}>
                                            Taxis
                                        </p>
                                    </StyledButton>
                                </Item>
                            </Grid>
                        </Grid>
                    </StyledToolbar>
                </Box>
            </AppBar>
        </Box>
    );
}
