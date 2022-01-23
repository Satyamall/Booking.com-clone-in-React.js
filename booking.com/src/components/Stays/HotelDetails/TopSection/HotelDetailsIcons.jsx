import styled from 'styled-components'
import PoolIcon from '@material-ui/icons/Pool';
import WifiIcon from '@material-ui/icons/Wifi';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import UpdateIcon from '@material-ui/icons/Update';

const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

const Cont = styled.div`
  display: grid;
  margin-top: 15px;
  margin-bottom: 10px;
  justify-content: center;

  p {
    margin: 0;
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px;
    color: #969696;
  }`

const styles = {
    fontSize: "35px", color: "#333", display: "block", margin: "auto"
}


export const HotelDetailsIcons = () => {


    return (<FlexDiv>
        <Cont>
            <PoolIcon style={styles}/>
            <p>Outdoor pool</p>
        </Cont>
        <Cont>
            <WifiIcon style={styles}/>
            <p>Free WiFi</p>
        </Cont>
        <Cont>
            <LocalParkingIcon style={styles}/>
            <p>Free paking</p>
        </Cont>
        <Cont>
            <AcUnitIcon style={styles}/>
            <p>Air condition</p>
        </Cont>
        <Cont>
            <UpdateIcon style={styles}/>
            <p>24-hour front desk</p>
        </Cont>
    </FlexDiv>)
}
