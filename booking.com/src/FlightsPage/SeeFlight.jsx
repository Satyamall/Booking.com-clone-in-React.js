import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import style from "./flights.module.css";
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import PaymentCard from "../CarRentalsPage/PaymentCard";

const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SeeFlight({id,origin,destination,arrival,departure,date,name,price}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [show, setShow]=React.useState(false);

  const handleShow=()=>{
    setShow(true);
  }

  return (
    <div>
      <Button onClick={handleOpen} sx={{color: "blue"}}>See Flight</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Your Flight Booking Detail
            {
              show ? (<div className={style.pay}>
                        <PaymentCard  fair={price}/>
                      </div>):
                    (<div className={style.flightCard}>
                        <div>
                        <div className={style.dataflight}>
                            <div>
                                <p>AI-{id}</p>
                                <ConnectingAirportsIcon/>
                            </div>
                            <div>
                                <h6>{arrival}</h6>
                                <p>{origin} Jan {date}</p>
                            </div>
                            <div>
                                <p>{arrival},{departure}</p>
                                <hr />
                                <p>1 stop</p>
                            </div>
                            <div>
                                <h6>{departure}</h6>
                                <p>{destination} Jan {date}</p>
                            </div>
                        </div>
                        <div>
                            <h4>{name}</h4>
                        </div>
                        </div>
                        <div className={style.bagBox}>
                            <div>
                                <p>Included: carry-on bag, personal item, checked bag</p>
                            </div>
                            <div>
                                <h3>INR{price}</h3>
                                <p>Total price for all travelers</p>
                            </div>
                            <div>    
                                <button className={style.seeflight} style={{background: "blue",color: "white"}} onClick={handleShow}>
                                  Pay Now
                                </button>
                            </div>
                        </div>
                    </div>)
                  }
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
