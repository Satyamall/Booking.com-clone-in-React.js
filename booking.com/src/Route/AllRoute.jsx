import { Route, Switch} from "react-router-dom";
import AttractionIndex from "../components/Attractions/AttractionIndex";
import ListLanding from "../components/Attractions/pages_and_layouts/attractionPlaceListpage/ListLanding";

function RouteControll() {
    // const {id}=useParams()
    // console.log(id)


    return (

        <Switch>
            <Route exact path="/atractions">
                <AttractionIndex/>
            </Route>
            <Route exact path="/">
                <AttractionIndex/>
            </Route>
            <Route exact path="/attractions/:country">
               <ListLanding/>
            </Route>

            <Route>
                <div>Page Not Found</div>
            </Route>
        </Switch>

    );

}
export default RouteControll;
