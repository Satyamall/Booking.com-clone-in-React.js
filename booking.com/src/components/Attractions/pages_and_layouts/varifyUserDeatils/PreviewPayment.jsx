import React from 'react'
import Button from '@mui/material/Button';
const PreviewPayment = () => {
    return (
        <div>
            <div style={{display:"flex",paddingBottom: "10px", borderBottom:"1px solid #aaa4a4"}}>
                <div>
                    <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x320/144059754.jpg?k=8e2414e149019a810c571938bba5a045c7a2f2be710fbe39b0d2e7704155c536&o=" alt="" style={ {width:"120px"} }/>
                </div>
                <div style={{margin:"5px"}}>
                    <h6>Burj Khalifa Admission Tickets - Floors 124 and 125</h6>
                    <div>date : 18/1/2022</div>
                    <div>2 X General admission </div>
                    <div>₹5,322.65</div>
                </div>
            </div>
            <h4>2X General admission (level 124 - 125)</h4>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <div>1 X Adults(age 13+)</div>
                <div>₹3,018.47</div>
            </div>
            <div  style={{display:"flex",justifyContent:"space-between"}}>
                <div>1 X Child (age 4-12)</div>
                <div>₹3,018.47</div>
            </div>
            <div  style={{display:"flex",justifyContent:"space-between",paddingBottom:"10px", borderBottom:"1px solid #aaa4a4"}}>
                <div>Total Price</div>
                <div>₹5322.65</div>
            </div>
            <Button variant="contained" style={{ width: '100%',height:"40px",margiTop:"10px"}}>Next</Button>
        </div>
    )
}

export default PreviewPayment
