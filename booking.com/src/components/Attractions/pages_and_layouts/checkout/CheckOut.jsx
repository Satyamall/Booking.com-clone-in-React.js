import React from 'react'
import { useSelector } from 'react-redux'
import Button from '@mui/material/Button';
import PreviewPayment from '../varifyUserDeatils/PreviewPayment';
import PaymentCard from '../../../../CarRentalsPage/PaymentCard';
const Checkout = () => {
    const place = useSelector( ( state ) => state.singleCountry );
    return (
        <div style={{ width: '80%',margin: 'auto'}}>
        <h2>Checkout and pay</h2>

        <div style={ { display: 'flex',justifyContent:"space-between"} }>

            <div style={{flexBasis:"50%"}}>
                <PaymentCard fair={localStorage.getItem("TotalPrice")}/>
                <h1>Cancellation policy</h1>
                <div style={{marginTop:"10px"}}>
                    The free cancellation period for this booking has already passed, so it's no longer possible to get a refund if you cancel.
                </div>
              <h1> Digital ticket</h1>
                <div style={{marginTop:"10px"}}>
                    Print tickets at home or show them on your phone at the venue</div>
                <h1>You'll pay in U.A.E. dirham (AED)</h1>
                <div style={{marginTop:"10px"}}>
                    The total price has been converted to show an approximate cost in your selected currency. You'll be charged in the attraction's currency (U.A.E. dirham).</div>
                    <Button variant="contained" style={{ width: '100%',height:"40px",marginTop:"10px"}}>PayNow</Button>
            </div>


            <div>
                <PreviewPayment/>
            </div>

        </div>

        </div>
    )
}

export default Checkout
