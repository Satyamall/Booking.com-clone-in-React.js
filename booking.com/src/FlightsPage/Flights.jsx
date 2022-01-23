import Covid from "./Covid";
import SearchForm from "./SearchForm";
import style from "./flights.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import WrapTextIcon from '@mui/icons-material/WrapText';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

export default function Flights() {
   
  const [popularFlight,setPopularFlight]=useState([]); 
  const [trendingCity,setTrendingCity]=useState([]);
  const [date,setDate]=useState(new Date().getDate());
  const nextDate= 7+date

  const [worldWideFlight,setWorldWideFlight]=useState([])

  const getPopularFlights=()=>{
    return fetch(`https://booking-flights-api.herokuapp.com/popular-flight`)
  }

  const getTrendingCity=()=>{
    return fetch(`https://booking-flights-api.herokuapp.com/trending-cities`)
    .then((res)=>res.json())
    .then((res)=>{
        setTrendingCity(res);
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const getWorldWideFlight=(text)=>{
    return fetch(`https://booking-flights-api.herokuapp.com/${text}`)
    .then((res)=>res.json())
    .then((res)=>{
        setWorldWideFlight(res)
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
      <div>
        <h1>Compare and book flights with ease</h1>
        <p>Discover your next dream destination</p>
      </div>
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
          <div className={style.btnBox}>
            {
              ["Asia","Europe","North-America","Oceania"].map((text)=>{
                return <button key={text} onClick={()=>getWorldWideFlight(text)} className={style.btn}>
                      {text}
                </button>
              })
            }
          </div>
          <hr />
          <div className={style.box3}>
            {
               worldWideFlight?.map((item)=>{
                  return <div key={item.id} className={style.continentCard}>
                  <Link to={`/flights/${item.origin}`} className={style.continentCardlink}>
                     <div>
                       <img src={item.image} alt="" className={style.img1} />
                     </div>
                     <div>
                     <h5 className={style.text}>{item.origin} to {item.destination}</h5>
                     <p className={style.text}>{item.description}</p>
                     </div>
                  </Link>
               </div>
               })
            }
          </div>
       </div>
     </div>
     <div className={style.popularFlight}>
       <h1>Frequently asked questions</h1>
       <div className={style.questionBox}>
       <div className={style.questionCard}>
         <h5>How do I find the cheapest flights on Booking.com?</h5>
         <p>You can sort flights by price to see them from cheapest to most expensive. To find the cheapest flights, you also need to consider factors like when you're booking and want to travel.</p>
       </div>
       <div className={style.questionCard}>
         <h5>Can I book one-way flights on Booking.com?</h5>
         <p>Yes, you can book one-way, round-trip, and multi-city flights on our site.</p>
       </div>
       <div className={style.questionCard}>
         <h5>How far in advance can I book a flight?</h5>
         <p>You can book a flight up to one year before your departure date.</p>
       </div>
       <div className={style.questionCard}>
         <h5>Do flights get cheaper closer to departure?</h5>
         <p>Generally, flight prices are more likely to increase the closer you get to your flight date.</p>
       </div>
       <div className={style.questionCard}>
         <h5>What is a flexible ticket?</h5>
         <p>A flexible ticket allows you to change your flight with the same airline by only paying the fare and tax difference. It can only be used for one confirmed change. You can add the flexible ticket when booking your flight.</p>
       </div>
       <div className={style.questionCard}>
         <h5>Does Booking.com charge credit card fees?</h5>
         <p>No, we don't charge any credit card fees. You can always see exactly what you’re paying for in the price breakdown when reviewing your booking.</p>
       </div>
       </div>
     </div>
    </>
  );
}