import styled from "styled-components"
import Carousel from 'react-elastic-carousel';


const Div = styled.div`
width:90%;
margin:0 auto;
button{
   
   
    
    border:0;
}

.rec.rec-arrow {
    border-radius: 50%;
   
  background-color:#ffff;
  color:black;
  font-size:15px;
 
   
}

.rec.rec-arrow:disabled {
    visibility: hidden;
    color:black;
}
.rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px lightgrey;
}

`
const breakPoints = [{width: 1, itemsToShow: 1}, {
    width: 550,
    itemsToShow: 2,
    itemsToScroll: 1,
    pagination: false
}, {width: 768, itemsToShow: 3, itemsToScroll: 1, pagination: false}, {
    width: 800,
    itemsToShow: 4,
    itemsToScroll: 1,
    pagination: false
}];


export const CarouselDiv = (props) => {


    return (<Div>

            <Carousel breakPoints={breakPoints}>

                {props.children}

            </Carousel>


        </Div>)
}
