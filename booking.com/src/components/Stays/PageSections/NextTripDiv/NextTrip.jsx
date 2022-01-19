import styled from "styled-components"
import { ImageContainer } from "./ImageContainer"



const Cont = styled.div`
width:80%;
margin: auto;
`
const H1 = styled.h1`
font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    margin:0;
    margin-bottom:16px;
    color:#333333;
    margin-top: 20px;
`
const FlexDiv = styled.div`
display:flex;
justify-content:space-between;
`

export const NextTrip = () => {


    return (
        <Cont>
            <H1>Get inspiration for your next trip</H1>

            <FlexDiv>
                <ImageContainer wide="320px" img="https://cf.bstatic.com/xdata/images/xphoto/540x405/122925057.webp?k=09f14b17546723a74f3c71cc9d5e5040e60c1594234b5a06cc3ce376ad299da5&o=">
                    <h1>Germany's most thrilling water parks</h1>
                    <p>From chaotic racer slides to calming saunas, there's something for everyone.</p>
                </ImageContainer>

                <ImageContainer wide="320px" img="https://cf.bstatic.com/xdata/images/xphoto/540x405/124728212.webp?k=7b5c982e56da0da2c45cb3e7663683b608d309a239a77ba2729f14cc6f0f36b2&o=">
                    <h1>48 hours in Tokyo for every traveler</h1>
                    <p>The perfect itinerary for a two-day trip around Tokyo – for every type of explorer.</p>
                </ImageContainer>


                <ImageContainer wide="320px" img="https://cf.bstatic.com/xdata/images/xphoto/540x405/122809197.webp?k=e7f86e398e43427ca04f743292823c6cdbc72ce486cb8a5609af837afd6f5255&o=">
                    <h1>8 ideas for an incredible solo trip</h1>
                    <p>
                        Make the most of me time by exploring a new city or just getting away from it all.
                    </p>
                </ImageContainer>
            </FlexDiv>

            <FlexDiv>
                <ImageContainer wide="490px" img="https://cf.bstatic.com/xdata/images/xphoto/540x405/121352725.webp?k=b630e51b3ad653b598a22809bd644c80513f8911932846d0ff981ee236a36a35&o=">
                    <h1>Wild swim in Europe’s 5 dreamiest lakes and fjords</h1>
                    <p>
                        Fun adventures through glacial waters in Norway and summer swims in Provençal lakes. </p>
                </ImageContainer>

                <ImageContainer wide="490px" img="https://cf.bstatic.com/xdata/images/xphoto/540x405/63486779.webp?k=316f6f1b92d64eb083891b2d8cf4d6f9b88a487052eed17a97846ff1f74da509&o=">
                    <h1>
                        5 breathtaking stays with a private pool
                    </h1>
                    <p>
                        Enjoy your vacation reclining by a private infinity pool or a panoramic plunge pool.    </p>
                </ImageContainer>
            </FlexDiv>
        </Cont>
    )

}