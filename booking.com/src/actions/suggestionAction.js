import {GET_SUGGESTION, GET_SUGGESTION_ERROR} from '../types'
import axios from 'axios'

export const getSuggestions = () => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:3002/suggestions`);
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
