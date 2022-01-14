import { Route, Switch } from "react-router-dom";
import CarRentals from "../CarRentalsPage/CarRentals";
import CarSearch from "../CarRentalsPage/CarSearch";
import Login from "../Login/Login";

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