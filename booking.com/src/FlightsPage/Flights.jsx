import Covid from "./Covid";
import SearchForm from "./SearchForm";
import style from "./flights.module.css";
import { useEffect, useState } from "react";
import { Link } from "@mui/material";
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import WrapTextIcon from '@mui/icons-material/WrapText';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

export default function Flights() {
   
  const [popularFlight,setPopularFlight]=useState([]); 
  const [trendingCity,setTrendingCity]=useState([]);
  const [date,setDate]=useState(new Date().getDate());
  const nextDate= 7+date

  const getPopularFlights=()=>{
    return fetch(`http://localhost:3000/popular-flight`)
  }

  const getTrendingCity=()=>{
    return fetch(`http://localhost:3000/trending-cities`)
    .then((res)=>res.json())
    .then((res)=>{
        setTrendingCity(res);
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getPopularFlights()
    .then((res)=>res.json())
    .then((res)=>{
        setPopularFlight(res);
    })
    .catch((err)=>{
      console.log(err)
    })

    getTrendingCity();
  },[])

  return (
    <>
     <div className={style.box1}>
      <Covid />
      <SearchForm />
     </div>
     <div className={style.popularFlight}>
        <h1>Popular flights near you</h1>
        <p>Find deals on domestic and international flights</p>
        <div className={style.popularCard}>
        {
          popularFlight?.map((item)=>{
            return <div key={item.id} className={style.card}>
               <Link to={`/flights/${item.origin}`} className={style.cardlink}>
                  <div>
                    <img src={item.image} alt="" className={style.img} />
                  </div>
                  <h5 className={style.text}>{item.origin} to {item.destination}</h5>
                  <p className={style.text}>Trip Duration: {item.startTime} - {item.endTime}</p>
               </Link>
            </div>
          })
        }
        </div>
     </div>
     <div className={style.popularFlight}>
        <h1>Trending cities</h1>
        <p>Book flights to a destination popular with travelers from India</p>
        <div className={style.popularCard}>
        {
            trendingCity?.map((item)=>{
            return <div key={item.id} className={style.card}>
               <Link to={`/flights/${item.city}`} className={style.cardlink}>
                  <div>
                    <img src={item.image} alt="" className={style.img} />
                  </div>
                  <h4 className={style.text}>{item.city}</h4>
                  <p className={style.text}>{item.about}</p>
                  <p className={style.text}>Trip Date: Jan {date} - {nextDate}</p>
               </Link>
            </div>
          })
        }
        </div>
     </div>

     <div className={style.box2}>
        <div className={style.box2Text}>
          <WrapTextIcon/>
          <div>
            <h5>Huge selection</h5>
            <p>Easily compare thousands of flights, all in one place</p>
          </div>
        </div>
        <div className={style.box2Text}>
          <FindReplaceIcon/>
          <div>
            <h5>No hidden fees</h5>
            <p>Always know exactly what you’re paying for</p>
          </div>
        </div>
        <div className={style.box2Text}>
         <AirplaneTicketIcon/>
          <div>
            <h5>More flexibility</h5>
            <p>Keep your travel dates open with flexible ticket options</p>
          </div>
        </div>
     </div>
     <div className={style.popularFlight}>
       <h1>Fly worldwide with Booking.com</h1>
       <p>Flights from wherever you are to wherever you want to go</p>
       <div>

       </div>
     </div>
     <div className={style.popularFlight}>
       <h1>Frequently asked questions</h1>
       <div>
       <div>
         <h5></h5>
         <p></p>
       </div>
       </div>
     </div>
    </>
  );
}