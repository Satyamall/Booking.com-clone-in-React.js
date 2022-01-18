import './home.css';
import './App.css';
import FirstPage from './home';

import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
// import "./styles.css";

import Hotels from './image/Hotels.png';
import Appartment from './image/Appartment.png';
import Resort from './image/Resort.png';
import Villas from './image/Villas.png';
import Cabins from './image/Cabins.png';
import Cottages from './image/Cottages.png';
// import Glamping from './image/Glamping.png';
import Serviced_appartment from './image/Serviced_appartment.png';
import Holidayhomes from './image/Holidayhomes.png';
import Guesthomes from './image/Guesthomes.png';
import hostels from './image/hostels.png';


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
  { width: 768, itemsToShow: 3, itemsToScroll: 1, pagination: false },
  { width: 800, itemsToShow: 4, itemsToScroll: 1, pagination: false }
];

function MiddleSection() {
  return (
    <div className="App">
      <FirstPage />
      <div className="corosel rec.rec-arrow:hover">
        <h2 className="browsH2">Browse by property type</h2>
        <Carousel breakPoints={breakPoints} pagination={false} >

          <Item>
            <div className="divimg">
              <img className="browsimg" src={Hotels} alt="Hotels" />
            </div>
            <div className="diver">
              <h4 className="subhead">Hotels</h4>
              <p className="bbrowssub">802,405 hotels</p>
            </div>


          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={Appartment} alt="Appartment" />
            </div>
            <div className="diver">
              <h4 className="subhead">Appartment</h4>
              <p className="bbrowssub">807,884 apartments</p>
            </div>
          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={Resort} alt="Resort" />
            </div>
            <div className="diver">
              <h4 className="subhead">Resort</h4>
              <p className="bbrowssub">17,482 resorts</p>
            </div>

          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={Villas} alt="Villas" />
            </div>
            <div className="diver">
              <h4 className="subhead">Villas</h4>
              <p className="bbrowssub">406,281 villas</p>
            </div>

          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={Cabins} alt="Cabins" />
            </div>
            <div className="diver">
              <h4 className="subhead">Cabins</h4>
              <p className="bbrowssub">31,734 cabins</p>
            </div>

          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={Cottages} alt="Cottages" />
            </div>
            <div className="diver">
              <h4 className="subhead">Cottages</h4>
              <p className="bbrowssub">142,790 cottages</p>
            </div>

          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={Serviced_appartment} alt="Serviced_appartment" />
            </div>
            <div className="diver">
              <h4 className="subhead">Serviced Appartment</h4>
              <p className="bbrowssub">33,743 serviced apartments</p>
            </div>

          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={Holidayhomes} alt="Holidayhomes" />
            </div>
            <div className="diver">
              <h4 className="subhead">Holidayhomes</h4>
              <p className="bbrowssub">406,281 holiday homes</p>
            </div>

          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={Guesthomes} alt="Guesthomes" />
            </div>
            <div className="diver">
              <h4 className="subhead">Guesthomes</h4>
              <p className="bbrowssub"></p>
            </div>

          </Item>

          <Item>
            <div className="divimg">
              <img className="browsimg" src={hostels} alt="Hostels" />
            </div>
            <div className="diver">
              <h4 className="subhead">hostels</h4>
              <p className="bbrowssub">115,537 guest houses</p>
            </div>

          </Item>

        </Carousel>
      </div>

      <div >


      </div>

    </div>
  );
}


// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
export { MiddleSection };
