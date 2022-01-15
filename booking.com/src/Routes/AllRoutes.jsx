import { Route, Switch } from "react-router-dom";
import CarRentals from "../components/CarRentalsPage/CarRentals";
import CarSearch from "../components/CarRentalsPage/CarSearch";
import Login from "../components/Login/Login";

export default function AllRoutes(){

    return(
        <>
          <Switch>
          <Route exact path="/">

            </Route>
            <Route exact path="/login">
                <Login />
            </Route>

            <Route exact path="/carrentals">
                <CarRentals/>
            </Route>

            <Route path="/carrentals/:id">
              <CarSearch/>
            </Route>
          </Switch>
        </>
    )
}
