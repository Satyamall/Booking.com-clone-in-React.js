import React, { useState } from 'react'
import Svg from './Svg'
import Paths from './SvgPaths'
import styles from './style/style.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { checkOutdetails } from '../../../actions/checkOutdetails'
const TicketSection = (props) => {
    const [ isTicketselect, setTicketSelect ] = useState( false );
    const [ adultTicket, setadultTicket ] = useState( 0 );
    const [ childTicket, setChildTicket ] = useState( 0 );
    const dispach=useDispatch()
    function setTicketquentity() {

        dispach(checkOutdetails({adultTicket:adultTicket,childTicket:childTicket}))
    }

    if ( !isTicketselect ) {
        return (
<div className={styles.ticketFirstView}>
            <h6>Return Ticket</h6>
            <div>
                <div>
                    <Svg path={ Paths.two } size="25px"
                    color="#000"/>
                </div>
                <div>
                    Free cancellation <span>See deatils</span>
                </div>
            </div>

            <div className={styles.ticketSelect}>
                <div>
                    <div>From</div>
                    <div>₹ {props.price}</div>
                </div>
                <div className={styles.selectbtn} onClick={()=> setTicketSelect(true)}>
                    Select
                </div>
            </div>
            </div>

        )

    }
    else {
        return (



            <div className={ styles.ticketAfterselect }>
                <div>
                    <div style={{fontWeight:"bold"}}>Return Ticket</div>
                <div onClick={()=> setTicketSelect(false)}>Change selection</div>
                </div>
            <div>
                <div>
                    <Svg path={ Paths.two } size="25px"
                    color="#000"/>
                </div>
                <div>
                    Free cancellation <span>See deatils</span>
                </div>
                </div>

                <h6>How many tickets?</h6>
                <div className={styles.Qselector}>
                    <div>
                        <div>Adult (age 13-99)</div>
                        <div>₹ {props.price}</div>
                    </div>
                    <div>
                        <span
                            onClick={ () => {
                              return  adultTicket!==0?setadultTicket((e)=>e-=1):""
                        }}>-</span>
                        <span>{adultTicket }</span>
                        <span
                            onClick={ () => {
                                setadultTicket((e)=>e+=1)
                        }}>+</span>
                    </div>
                </div>
                <div className={styles.Qselector}>
                    <div>
                        <div>child (age 4-12)</div>
                        <div>₹ {props.price-(props.price*40/100)}</div>
                    </div>
                    <div>
                        <span
                        onClick={ () => {
                            return  childTicket!==0?setChildTicket((e)=>e-=1):""
                      }}>-</span>
                        <span>{ childTicket}</span>
                        <span
                        onClick={ () => {
                            setChildTicket((e)=>e+=1)
                    }}>+</span>
                    </div>
                </div>
                <Link
                    to={ `/varifyPurchase/${props.id}` } style={ { textDecoration: "none" } }
                onClick={ () =>setTicketquentity()}>
                <div className={styles.NextBtn}>
                    <div>Next</div>
                    </div>
             </Link>
        </div>


    )
    }

}

export default TicketSection
