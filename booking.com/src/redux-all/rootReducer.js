import {
    combineReducers
} from "redux";
import attractionNav from "./attractons_page_nav/reducer/fetch";

// console.log(handleTodo)
const rootReducer = combineReducers( {
    attractionPageNav: attractionNav

} )
export default rootReducer;
