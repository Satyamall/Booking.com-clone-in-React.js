import styled from 'styled-components'
import {TopSection} from './TopSection/TopSection'
import {TitleInfo} from './TopSection/TittleInfo'
import {HotelDetailsIcons} from './TopSection/HotelDetailsIcons'
import {HotelAvailability} from './TopSection/HotelAvailability'
import {SearchBox} from "../SearchPage/SearchBox";
import {useParams} from 'react-router';
import {useState} from 'react'
import {useSelector} from "react-redux";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 3%;
  margin-left: 5%;
  margin-right: 7%;

  & > :nth-child(1) {
    width: 20%;
    padding: 20px;
    height: 440px;
  }

  & > :nth-child(2) {
    width: 60%;
  }

`
const Div = styled.div`
  margin: 0;
`
export const HotelDetails = () => {
    const param = useParams();
    const hotelData = useSelector(state => state.hotelsData.hotels)
    const [, setShowData] = useState("")

    const details = hotelData.filter((el) => {
        return el.id === Number(param.id)
    })
    const filterSearch = (search) => {
        const filteredData = hotelData.filter((e) => {
            return (e.name.toLowerCase().includes(search.toLowerCase()))
        })
        setShowData(filteredData)
    }
    return (<>
            <Container>
                <SearchBox filterSearch={filterSearch}/>
                <Div>
                    <TopSection/>
                    <TitleInfo name={`${details[0].name}`}
                               address={`${details[0].city}`}
                               url_1={`${details[0].visitUrls.url_1}`}
                               url_2={`${details[0].visitUrls.url_2}`}
                               url_3={`${details[0].visitUrls.url_3}`}
                               url_5={`${details[0].visitUrls.url_5}`}
                               url_6={`${details[0].visitUrls.url_6}`}
                               url_7={`${details[0].visitUrls.url_7}`}
                               url_8={`${details[0].visitUrls.url_8}`}
                               url_9={`${details[0].visitUrls.url_9}`}
                               url_10={`${details[0].visitUrls.url_10}`}
                    />
                    <HotelDetailsIcons/>
                    <HotelAvailability/>
                </Div>
            </Container>
        </>)
}
