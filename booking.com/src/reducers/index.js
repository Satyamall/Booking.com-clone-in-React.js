import {combineReducers} from 'redux'
import placesReducer from './placesReducer';
import carreducer from './carreducer';

export default combineReducers({
    places: placesReducer,
    car: carreducer
})