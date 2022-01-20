import * as React from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import style from "./Style.module.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import SideBar from "./SideBar";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { useState,useEffect} from 'react';
import { getCarSuccess,getDay } from '../../actions/caraction';

export default function CarAvailable() {

    const { startLocation, returnLocation, startDate, returnDate } = useSelector((state) => state.car, shallowEqual)
    const [pickDate, setPickDate] = useState(startDate);
    const [dropDate, setDropDate] = useState(returnDate);
    
    var day=Math.ceil(Math.abs(dropDate.getTime()-pickDate.getTime())/(24*60*60*1000))

    const dispatch = useDispatch();
    const handleClickSearch = () => {
        dispatch(getCarSuccess({ startLocation, returnLocation, pickDate, dropDate }))
    }
    
    const [carData,setCarData]=useState([]);
    const [supplier,setSupplier]=useState({
        carSupplier: "All"
    });
    const [fair,setFair]=useState({
        carFair: "All"
    });
    const [milage,setMilage]=useState({
        carMilage: "All"
    });

    const getCarData=()=>{
        return fetch(`https://booking-com-stay-cardata-api.herokuapp.com/car-availables`)
        .then((res)=>res.json())
        .then((res)=>{
            setCarData(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getCarData();
    },[])

    // console.log(carData)
    const handleSupplier=(title)=>{
        setSupplier({carSupplier: title});
    }

    const handleFair=(title)=>{
        setFair({carFair: title});
    }

    const handleMilage=(title)=>{
        setMilage({carMilage: title})
    }

    const handleChoose=()=>{
        dispatch(getDay({day}))
    }

    return (
        <>
            <div className={style.pageLink}>
                <Link to="/carrentals">Home</Link>
                <Link to={`/carrentals/${startLocation}`}><ArrowForwardIosIcon sx={{ fontSize: 12, m: .5 }} />{startLocation}</Link>
            </div>
            <div className={style.covid}>
                <h4><ReportGmailerrorredIcon /> Clean cars. Flexible bookings. Socially distant rental counters.</h4>
                <p>We’re working with our partners to keep you safe and in the driving seat.</p>
                <div>
                    <Link className={style.covidLink}>Find out how</Link>
                </div>
            </div>
            <div className={style.carAvailable}>
                <div className={style.sidebar}>
                    <div className={style.searchBox}>
                        <h3 className={style.h3}>Let's find your ideal car</h3>
                        <p>Pick-up</p>
                        <Link className={style.covidLink}>{startLocation?.toUpperCase()}</Link>
                        <div>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DateTimePicker
                                    renderInput={(props) => <TextField {...props} className={style.textField} />}
                                    value={pickDate}
                                    onChange={(newValue) => {
                                        setPickDate(newValue);
                                    }}
                                />
                            </LocalizationProvider>
                        </div>
                        <p>Drop-off</p>
                        <h4>{startLocation?.toUpperCase()}</h4>
                        <div>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DateTimePicker
                                    renderInput={(props) => <TextField {...props} className={style.textField}/>}
                                    value={dropDate}
                                    onChange={(newValue) => {
                                        setDropDate(newValue);
                                    }}
                                    className={style.searchDateBox}
                                />
                            </LocalizationProvider>
                        </div>
                        <button className={style.searchBtn} onClick={handleClickSearch}>Search</button>
                    </div>
                   <SideBar handleSupplier={handleSupplier}
                       handleFair={handleFair}
                       handleMilage={handleMilage}
                   />
                </div>
                <div className={style.map}>
                    <img src="https://www.google.com/maps/d/thumbnail?mid=1hjs3mIoZBblBP_CvxiP4w38STiY" alt="" />
                    <img src="https://www.google.com/maps/d/thumbnail?mid=1hjs3mIoZBblBP_CvxiP4w38STiY" alt="" />
                    <img src="https://www.google.com/maps/d/thumbnail?mid=1hjs3mIoZBblBP_CvxiP4w38STiY" alt="" />
                    <img src="https://www.google.com/maps/d/thumbnail?mid=1hjs3mIoZBblBP_CvxiP4w38STiY" alt="" />
                </div>
                <div className={style.carCards}>
                    <h3 className={style.h}>Available Cars Quality</h3>
                    {
                        carData.filter((item)=>{
                            if(supplier.carSupplier === "All")
                            {
                                return "All"
                            }
                            return item.supply === supplier.carSupplier
                        }).filter((item)=>{
                            if(fair.carFair === "All")
                            {
                                return "All"
                            }
                            return item.fair <= fair.carFair
                        }).filter((item)=>{
                            if(milage.carMilage === "All")
                            {
                                return "All"
                            }
                            return item.Milage <= milage.carMilage
                        }).map((item)=>{
                            return <div key={item.id} className={style.card}>
                                <div className={style.cardPart}>

                                  <div>
                                      <h1>Serial No.: {item.id}</h1>
                                      <img src={item.image} alt="" width="200px"/>
                                      <p className={style.supply}>{item.supply}</p>
                                      <p className={style.rental}>Rental terms</p>
                                  </div>
                                  <div>
                                      <div className={style.cardValue}>
                                      <h3>Location: </h3>
                                      <Link className={style.covidLink}> <h5>{startLocation?.toUpperCase()}</h5></Link>
                                      </div>
                                      <div className={style.cardValue}>
                                      <h5>Supplier : </h5>
                                      <p>{item.supply}</p>
                                      </div>
                                      <div className={style.cardValue}>
                                      <h5>Mileage : </h5>
                                      <p>{item.Milage} miles per rental</p>
                                      </div>
                                      <div className={style.cardValue}>
                                          <h5>Fuel Policy : </h5>
                                          <p>Like for Like</p>
                                      </div>
                                      <div className={style.cardValue}>
                                          <h5>Fair : </h5>
                                          <p>car hire from ₹ {item.fair} per day</p>
                                      </div>
                                      <div className={style.cardValue}>
                                            <h5>Special Offer : </h5>
                                            <p>Contactless Pick-up -Avoid the queues and the paperwork pre-registration needed before you arrive</p>
                                      </div>
                                  </div>
                                </div>
                                  <hr />
                                  <div className={style.bottom}>
                                      <div className={style.details}>
                                          <h4>Price includes: </h4>
                                          <p>Amendments</p>
                                          <p>Theft Protection</p>
                                          <p>Collision Damage Waiver</p>
                                      </div>
                                      <div>
                                          <p>Price for {day} days:</p>
                                          <h1>INR ₹ {item.fair*day?.toFixed(2)}</h1>
                                          <button className={style.btn} onClick={handleChoose}>
                                              <Link to={`/car-available/${item.id}`} className={style.link}>Choose this car</Link>
                                          </button>
                                      </div>
                                  </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}