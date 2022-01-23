import React from 'react'
import Button from '@mui/material/Button';
import {useSelector} from 'react-redux'
const PreviewPayment = () => {
    const place = useSelector( ( state ) => state.singleCountry.item );
    const checkout = useSelector( ( state ) => state.checkout )
    console.log(place)
    console.log( checkout )
    const TotalPrice = ( place.price * checkout.adultTicket ) + ( ( ( place.price * checkout.childTicket ) * 30 ) / 100 )
    // function localStorageHandle() {
    //     // localStorage.setItem("TotalPrice",TotalPrice)
    //     console.log(TotalPrice)
    // }
    return (
        <div>
            <div style={{display:"flex",paddingBottom: "10px", borderBottom:"1px solid #aaa4a4"}}>
                <div>
                    <img src={place.image} alt="" style={ {width:"120px"} }/>
                </div>
                <div style={{margin:"5px"}}>
                    <h6>{place.heading}</h6>
                    <div>date : { checkout.date.getDate() }
                       - {checkout.date.getMonth()+1}-
                        {checkout.date.getFullYear()}

                    </div>
                    <div>{checkout.adultTicket+checkout.childTicket} X General admission </div>
                    <div>₹{ (place.price*checkout.adultTicket)+(((place.price*checkout.childTicket)*30)/100)}</div>
                </div>
            </div>
            <h4>{checkout.adultTicket+checkout.childTicket} X General admission</h4>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <div>{checkout.adultTicket} X Adults(age 13+)</div>
                <div>₹{place.price*checkout.adultTicket}</div>
            </div>
            <div  style={{display:"flex",justifyContent:"space-between"}}>
                <div>{checkout.childTicket} X Child (age 4-12)</div>
                <div>₹{((place.price*checkout.childTicket)*30)/100}</div>
            </div>
            <div  style={{display:"flex",justifyContent:"space-between",paddingBottom:"10px", borderBottom:"1px solid #aaa4a4"}}>
                <div>Total Price</div>
                <div>₹{ (place.price*checkout.adultTicket)+(((place.price*checkout.childTicket)*30)/100)}</div>
            </div>
            <Button variant="contained" style={ { width: '100%', height: "40px", margiTop: "10px" } }
            onClick={()=>localStorage.setItem("TotalPrice",TotalPrice)}>Next</Button>
        </div>
    )
}

export default PreviewPayment
