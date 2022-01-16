import Navbar from '../Header/Header';
import FirstSection from "./PageSections/FirstSection";
import SecondSection from "./PageSections/SecondSection";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getSuggestions} from "../../actions/suggestionAction";

function Stays() {
    const dispatch = useDispatch();
    const suggestions = useSelector(state => state.suggestionsData.suggestions);

    useEffect(() => {
        if (suggestions.length === 0) {
            dispatch(getSuggestions())
        }
    }, [suggestions])


    return (<>
            <Navbar/>
            <FirstSection suggestions={suggestions}/>
            <SecondSection/>
        </>);
}

export default Stays;
