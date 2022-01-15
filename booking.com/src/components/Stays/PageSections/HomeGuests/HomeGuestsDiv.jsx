import {ConnetWithDiv} from "./ConnectWithDiv";
import styled from "styled-components"
import {CarouselDiv} from "./CarosueDiv";
import {BoxDiv} from "./BoxDiv";
import {LocationCarosueDiv} from "./LocationCarosueDiv";


const Cont = styled.div`
width: 100%;
margin: 0 auto;
margin-bottom: 30px;


`
const H1 = styled.h1`
font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    margin:0;
    margin-bottom:32px;
    color:#333333;
    margin-left:10%;
`

const homeData = [
    {
        img: "https://cf.bstatic.com/xdata/images/hotel/max500/121406433.jpg?k=35435a71d5387f6a42b598d421231b63f0a4c3f1886d9734e6e669e0576cbb3d&o=",


        title: "Luxury Apartments Klara",
        subtitle: "split",
        price: "13,961",
        rating: "9.5",
        ex: "Exceptional",
        reviews: "395",
    },
    {
        img: "https://cf.bstatic.com/xdata/images/hotel/max500/74529578.jpg?k=a7fcefd47d7271daf44f6ce78a215b9505f9f8e5cac3af093b78b9c489fd8461&o=",
        title: "Sugar Loft Apartments",
        subtitle: "Rio de janerio",
        price: "3,713",
        rating: "9.0",
        ex: "Wonderful",
        reviews: "321",
    },


    {
        img: "https://cf.bstatic.com/xdata/images/hotel/max500/34497879.jpg?k=d27391d1eaeb691fafed1ae7fd6cedcfa7d2634113ed446614bd2389ecb1bfc6&o=",
        title: "The Apartments by The Slone Club",
        subtitle: "London",
        price: "27,310",
        rating: "9.4",
        ex: "wonderful",
        reviews: "119",
    },
    {
        img: "https://cf.bstatic.com/xdata/images/hotel/max500/39615603.jpg?k=ffa7f14b1c5235c8883662876734f832a596de617cd8380ce1025fb21bc92df9&o=",
        title: "KeizersgrachtSuite471",
        subtitle: "Amsterdam",
        price: "68,931",
        rating: "9.6",
        ex: "exptional",
        reviews: "60",
    },
    {
        img: "https://cf.bstatic.com/xdata/images/hotel/max500/45976851.jpg?k=7bd839dd07e1384ebfde004069e25090a4a901728e9bdc8e200f411ed243999d&o=",
        title: "Luxury 3 Bedrooms Le Louvre I ",
        subtitle: "Paris",
        price: "24,920",
        rating: "8.6",
        ex: "Excellent",
        reviews: "56",
    },
    {
        img: "https://cf.bstatic.com/xdata/images/hotel/max500/73715592.jpg?k=9345147037f0931af5b86b3ec894b5e43681391f6ec7775c4555814a01552e25&o=",
        title: "Apartments on Blinskogo ulitsa",
        subtitle: "Saint Peterburg",
        price: "22,134",
        rating: "9,7",
        ex: "Exceptional",
        reviews: "30",
    },
    // {   img: "",
    //     title: "",
    // subtitle:"",
    // price: "",
    // rating:"",
    // ex:"",
    // reviews:"",
    // },

]


export const HomeGuestsDiv = () => {


    return (
        <Cont>
            <h3> Explore Places</h3>
            <LocationCarosueDiv/>
            <h2> Homes guests love</h2>

            <CarouselDiv>


                {homeData.map((i, index) => <BoxDiv key={index} img={i.img} title={i.title} subtitle={i.subtitle}
                                                    price={i.price} rating={i.rating}
                                                    ex={i.ex} reviews={i.reviews}
                />)}


            </CarouselDiv>

            {/* this if  for the travelling bol */}


            <ConnetWithDiv/>

        </Cont>
    )
}