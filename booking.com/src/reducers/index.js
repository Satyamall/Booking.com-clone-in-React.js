import {combineReducers} from 'redux'
import placesReducer from './placesReducer'

export default combineReducers({
    places: placesReducer
})