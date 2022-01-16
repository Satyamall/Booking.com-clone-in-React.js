import {BrowserRouter, Route, Switch} from "react-router-dom";
import CarRentals from "../components/CarRentalsPage/CarRentals";
import CarSearch from "../components/CarRentalsPage/CarSearch";
import Login from "../components/Login/Login";
import Home from "../components/Home";
import {SearchPage} from "../components/Stays/SearchPage/SearchPage";
import {HotelDetails} from "../components/Stays/HotelDetails/HotelDetails";


export default function Routes() {
    return (<>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                    <Route exact path="/search">
                        <SearchPage/>
                    </Route>

                    <Route path="/search/:id">
                        <HotelDetails/>
                    </Route>
                    <Route exact path="/carrentals">
                        <CarRentals/>
                    </Route>

                    <Route path="/carrentals/:id">
                        <CarSearch/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>)
}
