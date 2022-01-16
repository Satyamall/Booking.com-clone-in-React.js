import {combineReducers} from 'redux'
import placesReducer from './placesReducer'
import suggestionReducer from './suggestionReducer'
import hotelReducer from "./hotelReducer";

export default combineReducers({
    placesData: placesReducer, suggestionsData: suggestionReducer, hotelsData: hotelReducer
})
