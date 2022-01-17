import styled from 'styled-components'
import HotelRating from './HotelRating'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import RoomIcon from '@material-ui/icons/Room';
import {redirect} from 'react-router-dom';
import {useEffect, useState} from 'react';

const Cont = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;

`
const P = styled.p`
  font-size: 12px;
  font-weight: normal;
  line-height: 18px;
  vertical-align: middle;

  padding: 0 4px;
  border-radius: 3px;
  background: #aeaeae;
  color: #fff;
  display: inline;`

const Name = styled.h1`
  color: #262626;
  display: inline;
  font-size: 25px;
  font-weight: 700;
  line-height: 28px;
  margin: 0;
  margin-left: 5px;

`
const NameDiv = styled.div`
  display: flex;
  align-items: center;

  P {
    margin: 0;
  }
`
const Info = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  flex-wrap: wrap;
`
const Thumb = styled.div`
  width: 21px;
  height: 21px;
  background-color: #FEBB02;
  margin-left: 5px;
`

const RightDiv = styled.div`
  align-items: center;
  display: grid;
  justify-content: flex-end;
  margin-top: 10px;

  > div {
    display: flex;
    justify-content: flex-end;

    align-items: center;


    img {
      display: block;
      width: 16px;
      height: 16px;
    }

  }

`

const Reserve = styled.div`
  box-sizing: border-box;
  vertical-align: middle;


  min-height: 36px;
  min-width: 36px;

  border-radius: 2px;

  justify-content: center;
  text-align: left;
  padding: 8px 16px;
  cursor: pointer;
  background-color: #0071c2;
  border: 1px solid #0071c2;
  border-radius: 2px;
  margin-left: 20px;

  p {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #ffff;
  }

`

const Tag = styled.div`
  display: flex;
  justify-content: flex-end;

  align-items: center;

  p {
    font-style: italic;
    color: #333 !important;
    text-decoration: none;
    font-weight: bold;
    text-align: right;
    margin-left: 5px;
    font-size: 12px;
  }


`

const Map = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2%;
`
const MapInfo = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #262626;
`

const ShowMap = styled.p`
  cursor: pointer;
  color: #0071c2;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  margin-left: 10px;
  margin-top: 15px;
`
const ImageDiv = styled.div`

  display: grid;
  width: 100%;
  grid-template-areas: "short1 long"
                    "short2 long";

  grid-template-columns:33% 66%;
  grid-template-rows:170px 170px;
  grid-gap: 10px;


`
const ShortImage = styled.div`

  > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`

const LargeImage = styled.div`
  grid-area: "long";

  > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`

const Container = styled.div`
  width: 100%;`

const FlexDiv = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
`

const ImageBox = styled.div`
  background-size: auto;
  background-position: center;
  width: 18.5%;
  height: 110px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;



`

const Text = styled.div`

  p {
    color: #ffff;
    font-size: 1.1rem;
    font-weight: 700;
  }

`
export const TitleInfo = (props) => {
    const [user, setUser] = useState(false);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("login"));

        if (data) {
            setUser(true)
        } else {
            setUser(false)
        }
    }, [])

    const handleClick = () => {
        if (user) {

            alert("Congratulations! You Rooms has been booked successfully ")

            return <redirect to="/"/>
        } else {
            alert("Please login first!")
        }
    }
    return (

        <Container>
            <Cont>
                <Info>
                    <NameDiv>
                        <P> {props.type}</P>
                        <Name>{props.name}</Name>
                    </NameDiv>
                    <HotelRating num="5"/>
                    <Map>
                        <RoomIcon style={{color: "#3c79cf", marign: "0px"}}/>
                        <MapInfo>{props.address}</MapInfo>
                    </Map>
                    <ShowMap>
                        Show map
                    </ShowMap>
                </Info>
                <RightDiv>
                    <div>
                        <FavoriteBorderIcon style={{color: "#3c79cf"}}/>
                        <ShareIcon style={{color: "#3c79cf", marginLeft: "10px"}}/>
                        <Reserve>
                            <p onClick={handleClick}>
                                Reserve
                            </p>
                        </Reserve>
                    </div>
                </RightDiv>
            </Cont>
            <ImageDiv>
                <ShortImage style={{gridArea: "short1"}}>
                    <img src={`${props.url_1}`} alt="check"/>
                </ShortImage>
                <ShortImage style={{gridArea: "short2"}}>
                    <img src={`${props.url_2}`} alt="check"/>

                </ShortImage>
                <LargeImage style={{gridArea: "long"}}>
                    <img src={`${props.url_3}`} alt="check"/>
                </LargeImage>
            </ImageDiv>
            <FlexDiv>
                <ImageBox style={{backgroundImage: `url(${props.url_5})`}}/>
                <ImageBox style={{backgroundImage: `url(${props.url_6})`}}/>
                <ImageBox style={{backgroundImage: `url(${props.url_7})`}}/>
                <ImageBox style={{backgroundImage: `url(${props.url_8})`}}/>
                <ImageBox
                    style={{background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${props.img})`}}>
                    <Text><p>+5 photos</p>
                    </Text>
                </ImageBox>
            </FlexDiv>
        </Container>)
}
