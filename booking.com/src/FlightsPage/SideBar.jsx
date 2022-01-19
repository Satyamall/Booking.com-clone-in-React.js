import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import LinearSlider from './Slider';
import style from "./flights.module.css";

export default function SideBar({handleArrival,handleDeparture,handleName}) {
  const drawer = (
    <div>
      <div>
        <h4>Filters</h4>
        <p>Showing {} Results</p>
      </div>
      <div style={{marginTop: 20,marginBottom: 30}}>
        <h4>Stops</h4>
        <div>
          <input type="radio" defaultChecked />
          {" "}
          <label>1 Stop Max</label>
        </div>
      </div>
      <div>
        <h4>Duration</h4>
        <h6>Maximum travel time</h6>
        <LinearSlider/>
      </div>
      <div style={{marginTop: 20}}>
        <h4>Flight Times</h4>
      </div>
      <div style={{borderBottom: "2px solid blue", color: "blue",textAlign: "center",marginTop: 20,fontWeight: "600"}}>
        <p>Outbound flight</p>
      </div>
      <List>
        <h6>Departs from Chaudhary Charan Singh International Airport</h6>
        <div>
        <div>
          <button className={style.sideBarBtn} onClick={()=>handleArrival("All")}>
            <input type="checkbox" />
            <label>ALL</label>
          </button>
        </div>
        <div>
          <button className={style.sideBarBtn} onClick={()=>handleArrival("12:00 AM")}>
            <input type="checkbox" />
            <label>12:00 AM - 5:59 AM</label>
          </button>
        </div>
        <div>
          <button className={style.sideBarBtn} onClick={()=>handleArrival("6:00 AM")}>
            <input type="checkbox" />
            <label>6:00 AM - 11:59 AM</label>
          </button>
        </div>
        <div>
          <button className={style.sideBarBtn} onClick={()=>handleArrival("5:59 PM")}>
            <input type="checkbox" />
            <label>12:00 PM - 5:59 PM</label>
          </button>
        </div>
        <div>
          <button className={style.sideBarBtn} onClick={()=>handleArrival("11:59 PM")}>
            <input type="checkbox" />
            <label>6:00 PM - 11:59 PM</label>
          </button>
        </div>
        </div>
      </List>
      <Divider />
      <List>
        <h6>Arrives to Jaipur International Airport</h6>
        <div>
        <div>
          <button className={style.sideBarBtn} onClick={()=>handleDeparture("All")}>
            <input type="checkbox" />
            <label>ALL</label>
          </button>
        </div>
        <div>
          <button className={style.sideBarBtn} onClick={()=>handleDeparture("6:00 PM")}>
            <input type="checkbox" />
            <label>12:00 AM - 5:59 AM</label>
          </button>
        </div>
        <div>
          <button className={style.sideBarBtn} onClick={()=>handleDeparture("12:00 AM")}>
            <input type="checkbox" />
            <label>6:00 AM - 11:59 AM</label>
          </button>
        </div>
        <div>
          <button className={style.sideBarBtn} onClick={()=>handleDeparture("5:59 AM")}>
            <input type="checkbox" />
            <label>12:00 PM - 5:59 PM</label>
          </button>
        </div>
        <div>
          <button className={style.sideBarBtn} onClick={()=>handleDeparture("11:59 PM")}>
            <input type="checkbox" />
            <label>6:00 PM - 11:59 PM</label>
          </button>
        </div>
        </div>
      </List>
      <Divider/>
      <List>
          <h6>Airlines</h6>
          <div>
        <div>
          <button className={style.sideBarBtn} onClick={()=>handleName("All")}>
            <input type="checkbox" defaultChecked />
            <label>ALL</label>
          </button>
        </div>
        <div>
          <button className={style.sideBarBtn} onClick={()=>handleName("Air India")}>
            <input type="checkbox" defaultChecked />
            <label>Air India</label>
          </button>
        </div>
        <div>
          <button className={style.sideBarBtn} onClick={()=>handleName("IndiGo")}>
            <input type="checkbox" defaultChecked />
            <label>IndiGo</label>
          </button>
        </div>
        <div>
          <button className={style.sideBarBtn} onClick={()=>handleName("Vistara")}>
            <input type="checkbox" defaultChecked />
            <label>Vistara</label>
          </button>
        </div>
        </div>
      </List>
    </div>
  );

  return (
      <Box sx={{width: 300,marginLeft: 10,marginTop: 3}}>
          {drawer}
      </Box>
  );
}

