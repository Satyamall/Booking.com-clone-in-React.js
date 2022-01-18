import React, { useEffect } from 'react'
import styles from '../style/style.module.css'
import Svg from '../Svg'
import Paths from '../SvgPaths'
import CheckIcon from '@mui/icons-material/Check';
import MapImage from '../MapImage';
import AttractionPlaceSpac from '../AttractionPlaceSpac';
import AttractionViewReview from '../AttractionViewReview';
import Datepicker from '../Datepicker';
import TicketSection from '../TicketSection';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { idFetch } from '../../api/request';
import CloseIcon from '@mui/icons-material/Close';

// "id": 3,
// "country": "Bangladesh",
// "thingsToDo": "66-077-1087",
// "heading": "Howell and Sons",
// "city": "Pirojpur",
// "sortDescription": "Unsp injury of intercostal blood vessels, left side, subs",
// "price": 789,
// "image": "https://q-xx.bstatic.com/xdata/images/xphoto/300x320/110167392.jpg?k=17e3dcda124a481d49e37c0c80c58fb2c0ad43a20ccb46b145486cdbd2860add&o=",
// "ratings": 94,
// "instantConfirmation": false,
// "mainDescription": "Unspecified injury of intercostal blood vessels, left side, subsequent encounter",
// "mapImage": "http://dummyimage.com/212x100.png/cc0000/ffffff",
// "address": "66 Lukken Plaza",
// "category": "Tours"

const ViewPlaceLanding = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    console.log( id );
    useEffect( () => {
        dispatch( idFetch( id ) )
    }, [] );
    const place = useSelector( ( state ) => state.singleCountry );
    console.log(place)
    const container = {
        width: '90%',
        // border: "1px solid red",
        margin: "auto",
        marginTop: '10px'
    }
    const heroImage = {
        width: '100%',
        height: '400px',

        // backgroundSize: 'cover',
        background:`url(${place.item.image})`
    }
    return (
        <div style={container}>
            <div style={ heroImage }></div>
            <div className={styles.attractionsViewDiverder}>
                <div className={styles.attractionsViewLeft}>
                        <div className={ styles.attractionsViewName }>
                        {place.item.heading}
                    </div>
                    <div>{place.item.sortDescription }</div>

                    <div className={styles.infoIco}>
                        <div>
                        <Svg path={ Paths.like } color="#262626" size="25px"/>
                        </div>
                        <div>
                            { place.item.ratings}% liked it
                            <div>from 72 reviews</div>
                        </div>
                    </div>
                    <div className={styles.infoIco}>
                    <div>
                  {place.item.instantConfirmation? <CheckIcon/>:<CloseIcon/>}
                        </div>
                        <div>
                            Instant Confirmation
                        </div>
                    </div>
                    <div className={styles.infoIco}>
                        <div>
                        <Svg path={ Paths.freecancill } color="#262626" size="25px"/>
                        </div>
                        <div>
                        Free cancellation on some options
                        </div>
                    </div>

                    <p className={styles.description}>
                   {place.item.mainDescription}
                    </p>
                    <MapImage width="100%" height="400px" location={place.item.city}/>

                    <div className={ styles.meetingPointholder }>
                        <div>
                        <Svg path={ Paths.meetingPoint } color="#070707" size="30px"/>
                        </div>
                        <div>
                            <div>Meeting Point</div>
                            <div>{place.item.address}</div>
                            <div>Get directions</div>
                        </div>

                    </div>

                    <AttractionPlaceSpac />
                    <h1 style={{marginTop:"20px"}}>What visitors are saying</h1>
                    <AttractionViewReview/>
                </div>
                {/* flex section */ }

                <div className={styles.attractionsViewRight}>
                   <h4 style={{paddingTop:"30px",fontWeight: "700",
    fontfamily: "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif",fontsize: "20px",
    lineheight: "28px"}}>Ticket and Prices</h4>
                    <h5>when you are going?</h5>

                    <div style={{marginTop:"20px"}}>
                    <Datepicker/>
                    </div>
                    <div style={{marginTop:"20px"}}>
                        <TicketSection price={place.item.price} id={place.item.id}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViewPlaceLanding
