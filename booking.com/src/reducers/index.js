import {combineReducers} from 'redux'
import placesReducer from './placesReducer'
import suggestionReducer from './suggestionReducer'
import hotelReducer from "./hotelReducer";
import carreducer from './carreducer';
import attractionReducer from './AttractionReducer';
import singleCountryReducer from './singleCountryReducer';

export default combineReducers({
    placesData: placesReducer,
    suggestionsData: suggestionReducer,
    hotelsData: hotelReducer,
    car: carreducer,
    attraction: attractionReducer,
    singleCountry: singleCountryReducer
})
