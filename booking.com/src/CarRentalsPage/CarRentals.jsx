import * as React from 'react';
import { useEffect, useState } from 'react';
// import DateTimePicker from 'react-datetime-picker';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { Link } from "react-router-dom";
import style from "./Style.module.css";
import IconButton from '@mui/material/IconButton';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import CityCard from './CityCard';
import LanguageIcon from '@mui/icons-material/Language';
import PublicIcon from '@mui/icons-material/Public';
import CloudIcon from '@mui/icons-material/Cloud';
import StarIcon from '@mui/icons-material/Star';
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from 'react-bootstrap/esm/Dropdown';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import SearchBar from './SearchBar';
import countries from "./Countries";
import { SearchBar2 } from './SearchBar';
import { useDispatch } from "react-redux";
import { getCarSuccess } from '../actions/caraction';

export default function CarRentals() {

    const [startDate, setStartDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());
    const [startLocation, setStartLocation] = useState("")
    const [returnLocation, setReturnLocation] = useState("")
    const [popularCity, setPopularCity] = useState([]);
    const [carRental, setCarRental] = useState([]);
    const [loading, setLoading] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [suggestions2, setSuggestions2] = useState([]);
    const [show,setShow]=useState("true");

    useEffect(() => {
        if (startLocation === "") {
            setSuggestions([]);
        } else {
            let out = countries
                .filter((item) =>
                    item.country.toLowerCase().indexOf(startLocation) !== -1 ? true : false
                )
                .map((item) => item.country);
            setSuggestions(out);
        }
        setLoading(false);
    }, [startLocation]);

    useEffect(() => {
        if (returnLocation === "") {
            setSuggestions2([]);
        } else {
            let out = countries
                .filter((item) =>
                    item.city.toLowerCase().indexOf(returnLocation) !== -1 ? true : false
                )
                .map((item) => item.city);
            setSuggestions2(out);
        }
        setLoading(false);
    }, [returnLocation]);

    // console.log(startLocation,returnLocation,startDate,returnDate)
    const dispatch = useDispatch();
    const handleClickSearch = () => {
        dispatch(getCarSuccess({ startLocation, returnLocation, startDate, returnDate }))
    }

    const getData = () => {
        return fetch(`https://booking-com-stay-cardata-api.herokuapp.com/popular_city_car_hire`)
    }

    useEffect(() => {
        getData()
            .then(res => res.json())
            .then((res) => {
                setPopularCity(res);
            })
            .catch((err) => {
                console.log(err)
            })
        getCarRental()
    }, [])

    const getCarRental = () => {
        return fetch(`https://booking-com-stay-cardata-api.herokuapp.com/top_worldwide_car_rental`)
            .then((res) => res.json())
            .then((res) => {
                setCarRental(res);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleChange=(e)=>{
        setShow(e.target.value)
     }
    return (
        <>
            <div className={style.covid}>
                <h4><ReportGmailerrorredIcon /> Clean cars. Flexible bookings. Socially distant rental counters.</h4>
                <p>We’re working with our partners to keep you safe and in the driving seat.</p>
                <div>
                    <Link className={style.covidLink}>Find out how</Link>
                </div>
            </div>
            <div className={style.carRentals}>
                <div className={style.box1}>
                    <div className={style.text}>
                        <h1>Car hire for any kind of trip</h1>
                        <p>Compare deals from the biggest car hire companies</p>
                    </div>
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup row defaultValue="true" name="row-radio-buttons-group" onChange={handleChange}>
                                <FormControlLabel value="true" control={<Radio />} label="Return to same location" />
                            <FormControlLabel value="false" control={<Radio />} label="Return to different location" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className={style.box2}>
                        <div className={style.searchInputBox}>
                            <div className={style.pick}>
                                <IconButton sx={{ p: '10px' }} aria-label="menu">
                                    <DirectionsCarOutlinedIcon />
                                </IconButton>
                                <SearchBar
                                    loading={loading}
                                    setLoading={setLoading}
                                    value={startLocation}
                                    onChange={(val) => setStartLocation(val)}
                                    suggestions={suggestions}
                                    placeholder="Pick-up location"
                                />
                            </div>
                           { show==="true" ? null:  <div className={style.drop}>
                                <IconButton sx={{ p: '10px' }} aria-label="menu">
                                    <DirectionsCarOutlinedIcon />
                                </IconButton>
                                <SearchBar2
                                    loading={loading}
                                    setLoading={setLoading}
                                    value={returnLocation}
                                    onChange={(val) => setReturnLocation(val)}
                                    suggestions={suggestions2}
                                    placeholder="Drop-off location"
                                />
                            </div>
                          }
                        </div>
                        <div className={style.searchDateBox}>

                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DateTimePicker
                                    renderInput={(props) => <TextField {...props} />}
                                    value={startDate}
                                    onChange={(newValue) => {
                                        setStartDate(newValue);
                                    }}
                                />
                            </LocalizationProvider>
                        </div>
                        <div className={style.searchDateBox}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DateTimePicker
                                    renderInput={(props) => <TextField {...props} />}
                                    value={returnDate}
                                    onChange={(newValue) => {
                                        setReturnDate(newValue);
                                    }}
                                    className={style.searchDateBox}
                                />
                            </LocalizationProvider>
                        </div>
                        <button className={style.searchButton} onClick={handleClickSearch}>
                            <Link to="/car-available" className={style.searchLink}>SEARCH</Link>
                        </button>
                    </div>
                    <div className={style.driverBox}>
                        <FormGroup>
                            <div className={style.form}>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Driver aged between 30 - 65 " />
                                <ReportGmailerrorredIcon />
                            </div>
                        </FormGroup>
                        <div>
                            <label>Driver's age</label>
                            <input type="text" placeholder='Age' className={style.driver} />
                        </div>
                    </div>
                </div>
                <div className={style.box3}>
                    <h1>Popular Car hire brands</h1>
                    <div className={style.logo}>
                        <img src="https://cdn.rcstatic.com/images/supplier_logos/europcar_logo_lrg.gif" alt="" />
                        <img src="https://cdn.rcstatic.com/images/supplier_logos/alamo_logo_lrg.gif" alt="" />
                        <img src="https://cdn.rcstatic.com/images/suppliers/flat/sixt_logo_lrg.gif" alt="" />
                        <img src="https://cdn.rcstatic.com/images/supplier_logos/avis_logo_lrg.gif" alt="" />
                        <img src="https://cdn.rcstatic.com/images/supplier_logos/enterprise_logo_lrg.gif" alt="" />
                        <img src="https://cdn.rcstatic.com/images/supplier_logos/dollar_logo_lrg.gif" alt="" />
                        <img src="https://cdn.rcstatic.com/images/supplier_logos/thrifty_logo_lrg.gif" alt="" />
                        <img src="https://cdn.rcstatic.com/images/suppliers/flat/sicily_by_car_logo_lrg.gif" alt="" />
                    </div>
                </div>
                <div className={style.box3}>
                    <h1>Popular destinations for car hire</h1>
                    <div className={style.box4}>
                        {
                            popularCity?.map((item) => {
                                return <CityCard
                                    key={item.id}
                                    id={item.id}
                                    city={item.city}
                                    carDetail={item.carDetail}
                                    fair={item.fair}
                                    image={item.image}
                                />
                            })
                        }
                    </div>
                </div>
                <div className={style.box5}>
                    <div>
                        <h1>World's biggest online car hire service</h1>
                        <p>Why you can find the right car in the right place with us...</p>
                    </div>
                    <div className={style.iconBox}>
                        <div className={style.icon}>
                            <LanguageIcon className={style.iconLogo} sx={{ fontSize: 60 }} />
                            <div className={style.text1}>
                                <h4>60,000+</h4>
                                <p>locations</p>
                            </div>
                        </div>
                        <div className={style.icon}>
                            <PublicIcon className={style.iconLogo} sx={{ fontSize: 60 }} />
                            <div className={style.text1}>
                                <h4>160</h4>
                                <p>countries</p>
                            </div>
                        </div>
                        <div className={style.icon}>
                            <CloudIcon className={style.iconLogo} sx={{ fontSize: 60 }} />
                            <div className={style.text1}>
                                <h4>43</h4>
                                <p>languages spoken</p>
                            </div>
                        </div>
                        <div className={style.icon}>
                            <StarIcon className={style.iconLogo} sx={{ fontSize: 60 }} />
                            <div className={style.text1}>
                                <h4>3500,000</h4>
                                <p>customer reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.box6}>
                    <div className={style.box7}>
                        <h1>Frequently asked questions</h1>
                    </div>
                    <div className={style.box8}>
                        <DropdownButton id="dropdown-item-button" variant="outlined" size="lg" title="What do I need to rent a car?" className={style.size} >
                            <Dropdown.ItemText>When you’re booking the car, you just need a debit or credit card.
                                At the rental counter, you’ll need:
                                Your passport
                                Your voucher
                                Each driver’s driving licence
                                The main driver’s credit card (some rental companies also accept debit cards, but most don’t).
                                Important: Please make sure you check the car’s rental terms as well, as each rental company has its own rules. For example? They might need to see some extra ID. They might not accept certain types of credit card. Or they might not rent to any driver who hasn’t held their driving licence for 36 months or more.</Dropdown.ItemText>
                        </DropdownButton>
                        <DropdownButton id="dropdown-item-button" variant="outlined" size="lg" title="Am I old enough to rent a car" className={style.size}>
                            <Dropdown.ItemText>Most companies will rent you a car if you’re at least 21 (and some will rent to younger drivers). But if you’re under 25, you might still have to pay a ‘young driver fee’.</Dropdown.ItemText>
                        </DropdownButton>
                        <DropdownButton id="dropdown-item-button" variant="outlined" size="lg" title="Can I book a car for my partner, friend, colleague, etc?" className={style.size}>
                            <Dropdown.ItemText>Of course. Just put their details in the ‘Driver Details’ form when you’re booking the car.</Dropdown.ItemText>
                        </DropdownButton>
                        <DropdownButton id="dropdown-item-button" variant="outlined" size="lg" title="Any tips on choosing the right car?" className={style.size}>
                            <Dropdown.ItemText>Think about where you’re going. An SUV might be great for cruising down a Texas freeway, but a smaller car’s probably much easier to drive in Rome.
                                See what other people think. You’ll find lots of reviews and ratings on our site, so find out what other customers liked (and didn’t like) about each rental company.
                                Don’t forget the gearbox. In some countries, nearly everyone drives a manual car. In others, automatics are the norm. Make sure you rent one you can drive!</Dropdown.ItemText>
                        </DropdownButton>
                        <DropdownButton id="dropdown-item-button" variant="outlined" size="lg" title="is the rental price all inclusive?" className={style.size}>
                            <Dropdown.ItemText>The price you see includes the car, mandatory cover (e.g. Theft Protection and Collision Damage Waiver) and fees that, if they apply, are usually payable at pick-up (e.g. any one-way fees, airport surcharges or local taxes).

                                It also includes any extras you’ve already added (e.g. GPS or baby seats).

                                It doesn’t include any extra cover you buy when you get to the rental counter.

                                Tip: There’s a full price breakdown on the Payment page.</Dropdown.ItemText>
                        </DropdownButton>
                    </div>
                </div>
                <div className={style.box3}>
                    <div>
                        <h1>Top worldwide locations for car rental</h1>
                    </div>
                    <div className={style.box4}>
                        {
                            carRental?.map((item) => {
                                return <div key={item.id} className={style.card1}>
                                    <Link to={`/${item.city}`} className={style.link}>
                                        <img src={item.image} alt="" className={style.img} />
                                        <div className={style.text2}>
                                            <h3>{item.city}</h3>
                                            <p>Car hire from ₹ {item.fair} per day</p>
                                        </div>
                                    </Link>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}