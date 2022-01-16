import {GET_HOTEL, GET_HOTEL_ERROR} from '../types'
import axios from 'axios'
import {baseUrl} from "../constants";

export const getHotels = (location) => async dispatch => {
    try {
        let url = baseUrl + "/hotels";
        let dispatchActionType = GET_HOTEL
        if (location) {
            url = url + `?city=${location}`
        }
        const res = await axios.get(url);
        dispatch({
            type: dispatchActionType, payload: res.data
        })
    } catch (e) {
        console.log("err", e)
        dispatch({
            type: GET_HOTEL_ERROR, payload: e,
        })
    }

}
