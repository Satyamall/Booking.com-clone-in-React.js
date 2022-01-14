
import { useEffect, useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Link, useParams } from "react-router-dom";
import style from "./Style.module.css";
import IconButton from '@mui/material/IconButton';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import SearchBar from './SearchBar';
import countries from "./Countries";
import { SearchBar2 } from './SearchBar';
import {useDispatch} from "react-redux";
import { getCarSuccess } from '../Redux/car/action';

export default function CarSearch() {
    const {id}=useParams();
    const [startDate, setStartDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());
    const [startLocation, setStartLocation] = useState(id)
    const [returnLocation, setReturnLocation] = useState("")
    const [carRental, setCarRental] = useState([]);
    const [loading, setLoading] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [suggestions2, setSuggestions2] = useState([]);
    // const [show,setShow]=useState(false);

    useEffect(() => {
        if (startLocation==="") {
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
        if (returnLocation==="") {
            setSuggestions2([]);
        } else {
            let out = countries
                .filter((item) =>
                    item.country.toLowerCase().indexOf(returnLocation) !== -1 ? true : false
                )
                .map((item) => item.country);
            setSuggestions2(out);
        }
        setLoading(false);
    }, [returnLocation]);

    const dispatch=useDispatch();
    const handleClickSearch=()=>{
        dispatch(getCarSuccess({startLocation,returnLocation,startDate,returnDate}))
    }
    
    const getCarRental = () => {
        return fetch(`http://localhost:3000/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setCarRental(res);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getCarRental()
    }, [])

    return (
        <>
            <div className={style.carRentals}>
                <div className={style.box1}>
                    <div className={style.text}>
                        <h1>Car hire for any kind of trip</h1>
                        <p>Compare deals from the biggest car hire companies</p>
                    </div>
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup row defaultValue="same" name="row-radio-buttons-group">
                                <FormControlLabel value="same" control={<Radio />} label="Return to same location"/>
                                <FormControlLabel value="different" control={<Radio />} label="Return to different location"/>
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
                            <div className={style.drop}>
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
                        </div>
                        <DateTimePicker
                            onChange={(e) => setStartDate(e.target.value)}
                            value={startDate}
                            className={style.searchDateBox}
                        />
                        <DateTimePicker
                            onChange={(e) => setReturnDate(e.target.value)}
                            value={returnDate}
                            className={style.searchDateBox}
                        />
                        <button className={style.searchButton} onClick={handleClickSearch}>
                            <Link to="" className={style.searchLink}>SEARCH</Link>
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
                    <div>
                        <h1>Popular car rental destinations in the {id}</h1>
                    </div>
                    <div className={style.box4}>
                        {
                            carRental.map((item) => {
                                return <div key={item.id} className={style.card}>
                                    <Link to={`/carrentals/${item.city}`} className={style.link}>
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