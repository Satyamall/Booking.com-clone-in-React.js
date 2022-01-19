import {useEffect, useState} from 'react'
import styled from 'styled-components'

const Div = styled.div`
  width: 100%;
  margin-bottom: 20px;

`
const H1 = styled.div`
  font-size: 21px;
  line-height: 32px;
  font-weight: 600;
  color: #333;
  margin: 10px 0;

`
const Cont = styled.div`
  width: 94%;
  border: 1px solid #ccc7c7a6;
  border-radius: 3px;

  padding: 3%;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-between;
  align-items: center;

  * {
    margin: 0;
  }
`

const DataDiv = styled.div`
  p {
    margin: 0 0 4px;
    font-size: 14px;
    font-weight: 700;
    padding: 0;
  }

  h1 {
    color: #0071c2;
    font-weight: bold;
    font-size: 17px;
    border-bottom: 0;
    text-align: left;

  }

  h1:hover {
    text-decoration: underline;
  }
`
const Last = styled.div`
  color: #6b6b6b;
  display: block;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`

const FelxDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Line = styled.div`
  border-left: 1px solid lightGray;
  height: 40px;
`
const Button = styled.div`
  background-color: #0071c2;
  border: 1px solid #0071c2;
  border-radius: 2px;
  color: #ffff;
  font-size: 14px;
  font-weight: 500;
  justify-content: center;
  text-align: left;
  padding: 8px 16px;
  cursor: pointer;
  height: 3%;
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

  img {
    width: 16px;
    height: 16px;
  }
`
export const HotelAvailability = () => {
    const [reserve, setReserve] = useState(false)
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
            setReserve(!reserve)
        } else {
            alert("Please login first!")
        }
    }

    return (<Div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <H1>Availability</H1>
            <Tag>
                <img
                    src="https://cf.bstatic.com/static/img/bpg/bpg_logo_retina/b4785e81dfbdb3907f75887373d5920d3dc3b245.png"
                    alt="tag"/>
                <p>Lowest Match</p>
            </Tag>
        </div>
        <Cont>
            <FelxDiv>
                <DataDiv>
                    <p>Check-in data</p>
                    <h1>Sun, Jan 16, 2022</h1>
                    <Last>From 2:00 PM</Last>
                </DataDiv>
                <Line/>
                <DataDiv>
                    <p>Check-out data</p>
                    <h1>Tue, Jan 31 , 2022</h1>
                    <Last>2-week stay</Last>
                </DataDiv>
            </FelxDiv>
            <FelxDiv>
                <DataDiv>
                    <p>Guests</p>
                    <h1>2 adults</h1>
                </DataDiv>
                <Button onClick={handleClick}>
                    {!reserve ? "Reserve" : "Reserved"}
                </Button>
            </FelxDiv>
        </Cont>
    </Div>)
}
