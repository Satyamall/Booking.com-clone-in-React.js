import {combineReducers} from 'redux'
import placesReducer from './placesReducer';
import carreducer from './carreducer';
import attractionReducer from './AttractionReducer';

export default combineReducers({
    places: placesReducer,
    car: carreducer,
    attraction:attractionReducer
})
