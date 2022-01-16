import {GET_SUGGESTION, GET_SUGGESTION_ERROR} from '../types'
import axios from 'axios'
import {baseUrl} from "../constants";

export const getSuggestions = () => async dispatch => {
    try {
        const res = await axios.get(`${baseUrl}/suggestions`);
        dispatch({
            type: GET_SUGGESTION, payload: res.data
        })
    } catch (e) {
        console.log("err", e)
        dispatch({
            type: GET_SUGGESTION_ERROR, payload: e,
        })
    }

}
