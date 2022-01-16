import { Link, useParams } from "react-router-dom";
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import style from "./Style.module.css";
import { shallowEqual, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PayButton from "./PayButton";

export default function CarPayment() {

    const { day, startLocation } = useSelector((state) => state.car, shallowEqual);
    const { id } = useParams();

    const [show,SetShow]=useState(false);
    const [carData, setCarData] = useState([]);
    const [cardLink,setCardLink]=useState("https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/visa.svg")

    const getCarData = () => {
        return fetch(`http://localhost:3000/car-availables/${id}`)
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

    const handleCard=(link)=>{
        setCardLink(link)
    }

    const token= new Date().getTime();
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
                    show ? <div className={style.payCard}>
                    <h1 className={style.hTag}>Total Fair: ₹ {carData.fair*day.day?.toFixed(2)}</h1>
                    <h3>Check and Pay</h3>
                    <h4>How would you like to pay</h4>
                    <div className={style.btnCard}>
                        {
                            ["https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/mc.svg",
                             "https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/visa.svg",
                             "https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/amex.svg",
                             "https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/discover.svg",
                             "https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/jcb.svg",
                             "https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/unionpay.svg",
                             "https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/diners.svg",   
                             "https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/paypal.svg" 
                        ].map((link)=>{
                            return <button onClick={()=>handleCard(link)}>
                                <img src={link} alt="" />
                            </button>
                        })
                        }
                    </div>
                    <div className={style.inputBox}>
                        <div>
                            <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/generic-cc.svg" alt="" />
                            {" "}
                            <img src={cardLink} alt="" />
                            {" "}
                            Pay Card Type
                        </div>
                    </div>
                    <div>
                        <label>Cardholder's name*</label>
                        <div className={style.inputBox}>
                            <input type="text" placeholder="Card Holder's Name" className={style.input}/>
                        </div>
                    </div>
                    <div>
                        <label>Card Number*</label>
                        <div className={style.inputBox}>
                          <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/generic-cc.svg" alt="" />
                          {" "}
                           <input type="number" className={style.input}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label >Expiry Date*</label>
                            <div className={style.inputBox}>
                                <input type="text" placeholder="MM / YY" className={style.input} />
                            </div>
                        </div>
                        <div>
                            <label>CVC*</label>
                            <div className={style.inputBox}>
                                <img src="https://t-ec.bstatic.com/static/img/payments/payment_icons_redesign/generic-cc.svg" alt="" />
                                {" "}
                                <input type="number" className={style.input}/>
                            </div>
                        </div>
                    </div>
                    <button className={style.payBtn}>
                        <PayButton token={token}/>
                    </button>
                </div> : null
                }
            </div>
        </>
    )
}
