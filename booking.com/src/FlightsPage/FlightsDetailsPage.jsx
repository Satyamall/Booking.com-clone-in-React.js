
import SearchForm from "./SearchForm";
import style from "./flights.module.css";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import LuggageIcon from '@mui/icons-material/Luggage';
import SeeFlight from "./SeeFlight";

export default function FlightsDetailsPage(){

    const [flightData,setFlightData]=useState([]);
    const [date,setDate]=useState(new Date().getDate());

    const getFlightData=()=>{
        return fetch(`https://booking-flights-api.herokuapp.com/flights`)
        .then((res)=>res.json())
        .then((res)=>{
            setFlightData(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
       getFlightData();
    },[])

    const [arrival,setArrival]=useState({
        flightArrival: "All"
    });
    const [departure,setDeparture]=useState({
        flightDeparture: "All"
    });
    const [name,setName]=useState({
        flightName: "All"
    });

    const handleArrival=(text)=>{
        setArrival({flightArrival: text});
    }

    const handleDeparture=(text)=>{
         setDeparture({flightDeparture: text})
    }

    const handleName=(text)=>{
          setName({flightName: text})
    }
    return(
        <>
        <div className={style.searchBox}>
            <SearchForm/>
        </div>
        <div className={style.SideBar}>
          <div>
            <SideBar 
              handleArrival={handleArrival}
              handleDeparture={handleDeparture}
              handleName={handleName}
            />
          </div>
          <div className={style.flight}>
            {
                flightData?.filter((val)=>{
                    if(arrival.flightArrival==="All")
                    {
                        return "All"
                    }
                    return val.arrivalTime=arrival.flightArrival
                }).filter((val)=>{
                    if(departure.flightDeparture==="All")
                    {
                        return "All"
                    }
                    return val.departureTime=departure.flightDeparture
                }).filter((val)=>{
                    if(name.flightName==="All")
                    {
                        return "All"
                    }
                    return val.name = name.flightName
                }).map((item)=>{
                    return <div key={item.id} className={style.flightCard}>
                        <div>
                        <div className={style.dataflight}>
                            <div>
                                <p>AI-{item.id}</p>
                                <ConnectingAirportsIcon/>
                            </div>
                            <div>
                                <h6>{item.arrivalTime}</h6>
                                <p>{item.origin} Jan {date}</p>
                            </div>
                            <div>
                                <p>{item.arrivalTime},{item.departureTime}</p>
                                <hr />
                                <p>1 stop</p>
                            </div>
                            <div>
                                <h6>{item.departureTime}</h6>
                                <p>{item.destination} Jan {date}</p>
                            </div>
                        </div>
                        <div>
                            <h4>{item.name}</h4>
                        </div>
                        </div>
                        <div className={style.bagBox}>
                            <div>
                               <LuggageIcon/>
                               <LuggageIcon/>
                               <LuggageIcon/>
                            </div>
                            <div>
                                <p>Included: carry-on bag, personal item, checked bag</p>
                            </div>
                            <div>
                                <h3>INR{item.price}</h3>
                                <p>Total price for all travelers</p>
                            </div>
                            <div>    
                                <button className={style.seeflight}>
                                <SeeFlight 
                                   date={date}
                                   id={item.id}
                                   origin={item.origin}
                                   destination={item.destination}
                                   arrival={item.arrivalTime}
                                   departure={item.departureTime}
                                   name={item.name}
                                   price={item.price}
                                />
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