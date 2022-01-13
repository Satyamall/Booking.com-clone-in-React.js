
import { useEffect, useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Link } from "react-router-dom";
import style from "./Style.module.css";
import InputBase from '@mui/material/InputBase';
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

export default function CarRentals() {

    const [value, onChange] = useState(new Date());
    const [popularCity,setPopularCity]=useState([]);

    const getData=()=>{
        return fetch(`http://localhost:3000/popular_city_car_hire`)
    }

    useEffect(()=>{
        getData()
        .then(res=>res.json())
        .then((res)=>{
            setPopularCity(res);
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    // console.log(popularCity);
    return (
        <div className={style.carRentals}>
            <div className={style.box1}>
                <div className={style.text}>
                    <h1>Car hire for any kind of trip</h1>
                    <p>Compare deals from the biggest car hire companies</p>
                </div>
                <div>
                    <FormControl component="fieldset">
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                            <FormControlLabel value="same" control={<Radio />} label="Return to same location" />
                            <FormControlLabel value="different" control={<Radio />} label="Return to different location" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className={style.box2}>
                    <div className={style.searchInputBox}>
                        <IconButton sx={{ p: '10px' }} aria-label="menu">
                            <DirectionsCarOutlinedIcon />   
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Pick-up location"
                            inputProps={{ 'aria-label': 'Pick-up location' }}
                        />
                        <div className={style.drop}>
                        <IconButton sx={{ p: '10px' }} aria-label="menu">
                            <DirectionsCarOutlinedIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Drop-off location"
                            inputProps={{ 'aria-label': 'Pick-up location' }}
                        />
                        </div>
                    </div>
                    <DateTimePicker
                        onChange={onChange}
                        value={value}
                        className={style.searchDateBox}
                    />
                    <DateTimePicker
                        onChange={onChange}
                        value={value}
                        className={style.searchDateBox}
                    />
                    <button className={style.searchButton}>
                        <Link to="" className={style.searchLink}>SEARCH</Link>
                    </button>
                </div>
                <div className={style.driverBox}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Driver aged between 30 - 65 " />
                        <img src="" alt="" />
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
                       popularCity.map((item)=>{
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
                        <LanguageIcon className={style.iconLogo}/>
                        <div>
                            <h4>60,000+</h4>
                            <p>locations</p>
                        </div>
                    </div>
                    <div className={style.icon}>
                        <PublicIcon className={style.iconLogo} />
                        <div>
                            <h4>160</h4>
                            <p>countries</p>
                        </div>
                    </div>
                    <div className={style.icon}>
                        <CloudIcon className={style.iconLogo}/>
                        <div>
                            <h4>43</h4>
                            <p>languages spoken</p>
                        </div>
                    </div>
                    <div className={style.icon}>
                        <StarIcon className={style.iconLogo}/>
                        <div>
                            <h4>3500,000</h4>
                            <p>customer reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}