import {GET_HOTEL, GET_HOTEL_FILTERED} from '../types'

const initialState = {
    hotels: [], hotelsFiltered: [], loading: true,
}

export default function (state = initialState, action) {

    switch (action.type) {
        case GET_HOTEL:
            return {
                ...state, hotels: action.payload, loading: false
            }
        case GET_HOTEL_FILTERED:
            return {
                ...state, hotelsFiltered: action.payload, loading: false
            }
        default:
            return state
    }
}
