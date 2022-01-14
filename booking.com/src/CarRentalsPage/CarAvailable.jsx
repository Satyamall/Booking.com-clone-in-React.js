import { shallowEqual, useSelector } from "react-redux"


export default function CarAvailable(){

    const {startLocation,returnLocation,startDate,returnDate}=useSelector((state)=> state.car,shallowEqual)
    console.log(startLocation,returnLocation,startDate,returnDate)
    return(
        <div>
            h1
        </div>
    )
}