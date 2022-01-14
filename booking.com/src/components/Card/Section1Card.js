import Card from "./Card";
import {useEffect} from "react";
import {getPlaces} from "../../actions/places";
import {useDispatch, useSelector} from "react-redux";

export default function Section1Card() {
    const dispatch = useDispatch()
    const data = useSelector(state => state.places.places);

    useEffect(() => {
        if (data.length === 0) {
            dispatch(getPlaces());
        }
    }, [data]);


    const displayCards = () => {
        return data.map((item) => {
            return <Card
                key={item.id}
                width={item.width}
                height={item.height}
                image={item.image}
                h3_val={item.h3_val}
                para_val={item.para_val}
            />
        })
    }


    return (
        <>
            {displayCards()}
        </>
    )
}