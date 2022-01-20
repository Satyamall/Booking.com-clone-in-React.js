import { Link, useParams } from "react-router-dom";
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import style from "./Style.module.css";
import { shallowEqual, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PaymentCard from "./PaymentCard";

export default function CarPayment() {

    const { day, startLocation } = useSelector((state) => state.car, shallowEqual);
    const { id } = useParams();

    const [show,SetShow]=useState(false);
    const [carData, setCarData] = useState([]);

    const getCarData = () => {
        return fetch(`https://booking-com-stay-cardata-api.herokuapp.com/car-availables/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setCarData(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getCarData();
    }, [id])

    const handleShow=()=>{
        SetShow(true);
    }

    return (
        <>
            <div className={style.pageLink}>
                <Link to="/carrentals">Home</Link>
            </div>
            <div className={style.covid}>
                <h4><ReportGmailerrorredIcon /> Clean cars. Flexible bookings. Socially distant rental counters.</h4>
                <p>We’re working with our partners to keep you safe and in the driving seat.</p>
                <div>
                    <Link className={style.covidLink}>Find out how</Link>
                </div>
            </div>
            <div className={style.paymentCard}>
                <div className={style.card}>
                    <div className={style.cardPart}>

                        <div>
                            <h1>Serial No.: {carData.id}</h1>
                            <img src={carData.image} alt="" width="200px" />
                            <p className={style.supply}>{carData.supply}</p>
                            <p className={style.rental}>Rental terms</p>
                        </div>
                        <div>
                            <div className={style.cardValue}>
                                <h3>Location: </h3>
                                <Link className={style.covidLink}> <h3>{startLocation.toUpperCase()}</h3></Link>
                            </div>
                            <div className={style.cardValue}>
                                <h5>Supplier : </h5>
                                <p>{carData.supply}</p>
                            </div>
                            <div className={style.cardValue}>
                                <h5>Mileage : </h5>
                                <p>{carData.Milage} miles per rental</p>
                            </div>
                            <div className={style.cardValue}>
                                <h5>Fuel Policy : </h5>
                                <p>Like for Like</p>
                            </div>
                            <div className={style.cardValue}>
                                <h5>Fair : </h5>
                                <p>car hire from ₹ {carData.fair} per day</p>
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
                            <p>Price for {day.day} days:</p>
                            <h1>INR ₹ {carData.fair * day.day?.toFixed(2)}</h1>
                            <button className={style.btn} onClick={handleShow}>
                                <Link className={style.link}>Book This Car</Link>
                            </button>
                        </div>
                    </div>
                </div>
                {
                    show ? <PaymentCard fair={carData.fair * day.day?.toFixed(2)}/> : null
                }
            </div>
        </>
    )
}
