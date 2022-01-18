import styled from "styled-components"
import {InfoDiv} from "./InfoDiv"


const H1 = styled.h1`
  font-size: 24px;
  font-weight: 700;

  margin: 16px 0;

  color: #333333;
`

const FlexDiv = styled.div`
  display: flex;

`

const Div = styled.div`
  margin-left: 10%;
  margin-bottom: 20px;
`


export const ConnetWithDiv = () => {

    return (<Div>
            <h2 style={{marginTop: 40}}>Connect with other travelers</h2>

            <FlexDiv>
                <InfoDiv>

                    <img
                        src="https://cf.bstatic.com/static/img/communities/cover-photo/300x300/india/a047bf294ce2d2e145fdcdd3097b9a7f4e6df229.jpg"
                        alt="diplayimage"/>

                    <h2>India</h2>
                    <p>Travel community</p>
                    <p>155,073 travelers</p>
                </InfoDiv>

                <InfoDiv>
                    <img
                        src="https://cf.bstatic.com/static/img/communities/cover-photo/300x300/travel-discussions/35a717b9feba5c8f800e2a8949dfa5014e4e79b4.jpg"
                        alt="diplayimage"/>

                    <h2>Travel Talk</h2>

                    <p>General discussion</p>
                    <p> 556,436 travelers</p>
                </InfoDiv>
                <InfoDiv>
                    <img
                        src="https://cf.bstatic.com/static/img/communities/communities-index/photo-300x300/b2d5ae20ed65039fe73edbeea8b34ccfddbd63b4.png"
                        alt="diplayimage"/>

                    <h2>More communities</h2>

                    <p>View all</p>
                    <p>10,103,767 travlers</p>
                </InfoDiv>


            </FlexDiv>
        </Div>)

}
