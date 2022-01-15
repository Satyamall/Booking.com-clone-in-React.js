import { shallowEqual, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import style from "./Style.module.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import SideBar from "./SideBar";

export default function CarAvailable() {

    const { startLocation, returnLocation, startDate, returnDate } = useSelector((state) => state.car, shallowEqual)
    console.log(startLocation, returnLocation, startDate, returnDate)
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
            <div>
                <SideBar/>
            </div>
        </>
    )
}