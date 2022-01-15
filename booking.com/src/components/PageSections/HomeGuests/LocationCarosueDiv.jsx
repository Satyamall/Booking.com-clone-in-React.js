import styled from "styled-components";
import {CarouselDiv} from "./CarosueDiv";


const Box = styled.div`
  width: 240px;
  overflow: hidden;
  margin: 0;

  h1, p {
    margin: 0;
    color: #ffff;
  }


`
const ImgDiv = styled.div`
  height: 180px;
  background-position: center;
  background-size: cover;
  position: relative;
`
const ImgText = styled.div`
  position: absolute;
  padding: 11px;
  bottom: 0;
  left: 0;
  width: 90%;
  margin-bottom: 0;
  background: linear-gradient(0deg, #000 0, rgba(0, 0, 0, .8) 50%, transparent);


  h1 {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`

const A = styled.div`
  a {
    text-overflow: ellipsis;

    margin-right: 10px;
    font-size: 14px;
    color: #0071c2;


  }
`


export const LocationCarosueDiv = () => {

    return (


        <CarouselDiv>
            <Box>

                <ImgDiv
                    style={{backgroundImage: `url(https://cf.bstatic.com/xdata/images/city/400x300/619952.webp?k=ea2c27c813f0f20fdbe688bd206f8a156c4c84a151ebc30f7d4c0934b8fdc18c&o=)`}}>
                    <ImgText>
                        <h1>Dubai</h1>
                        <p>United Arab Emirates</p>
                    </ImgText>

                </ImgDiv>

                <A>
                    <a href="/">2,912 vaction renetals</a>
                    <a href="/">447 apartments,</a>
                    <a href="/">247 hostles, </a>
                    <a href="/">192B&Bs,</a>
                </A>

            </Box>

            <Box>

                <ImgDiv
                    style={{backgroundImage: `url(https://cf.bstatic.com/xdata/images/city/400x300/619693.webp?k=f8b4867c83350e9d4bf107ee636b7f5a9338c58b24465c5bbc0f772e562217aa&o=)`}}>
                    <ImgText>
                        <h1>Singapore </h1>
                        <p>Singapore </p>
                    </ImgText>

                </ImgDiv>

                <A>
                    <a href="/">112 vacation rentals,</a>
                    <a href="/">103 apartments,</a>
                    <a href="/">638 vacation rentals,</a>
                </A>

            </Box>


            <Box>

                <ImgDiv
                    style={{backgroundImage: `url(https://cf.bstatic.com/xdata/images/city/400x300/620035.webp?k=b2af9f1a1c47c00d7464dc35d5d5f1cbaab3a26958bcbeb99ce44c6be3d20ca7&o=)`}}>
                    <ImgText>
                        <h1>Bangkok </h1>
                        <p>Thailand </p>
                    </ImgText>
                </ImgDiv>

                <A>
                    <a href="/">638 vacation rentals, </a>
                    <a href="/"> 447 apartments, </a>
                    <a href="/"> 398 vacation rentals</a>
                    <a href="/">222 B&Bs, </a>
                    <a href="/">140 serviced apartments </a>


                </A>

            </Box>

            <Box>

                <ImgDiv
                    style={{backgroundImage: `url(https://cf.bstatic.com/xdata/images/city/400x300/613098.webp?k=84b0ca81bc30f78bf96f407cf11d102cb85cb9a1e59acba20e1956c10ae05f9d&o=)`}}>
                    <ImgText>
                        <h1> London</h1>
                        <p>United Kingdom </p>
                    </ImgText>
                </ImgDiv>

                <A>
                    <a href="/">3,747 vacation rentals, </a>
                    <a href="/"> 301 homestays,</a>
                    <a href="/"> 257 villas, </a>
                    <a href="/"> 257 vacation homes</a>
                    <a href="/"> </a>
                    <a href="/"> </a>
                    <a href="/"> </a>

                </A>

            </Box>
            <Box>

                <ImgDiv
                    style={{backgroundImage: `url(https://cf.bstatic.com/xdata/images/city/400x300/613091.webp?k=3097e51fff5124b7bfc362ccffcd420d78677cd0331b45054cf02e5f8082e434&o=)`}}>
                    <ImgText>
                        <h1> Paris, </h1>
                        <p> France</p>
                    </ImgText>
                </ImgDiv>

                <A>
                    <a href="/">2,766 vacation rentals, </a>
                    <a href="/">
                        2,697 apartments,</a>
                    <a href="/"> 146 serviced apartments,</a>
                    <a href="/"> 74 B&Bs,</a>
                    <a href="/"> 33 hostels</a>

                </A>

            </Box>

            <Box>

                <ImgDiv
                    style={{backgroundImage: `url(https://cf.bstatic.com/xdata/images/city/400x300/972588.webp?k=5ebdb1721f249f78e1007361b6b5a57179490bc316d508a448c7e9034e512d24&o=)`}}>
                    <ImgText>
                        <h1> Amsterdam</h1>
                        <p> Netherlands</p>
                    </ImgText>
                </ImgDiv>

                <A>
                    <a href="/"> 652 vacation rentals,</a>
                    <a href="/"> 322 B&Bs, </a>
                    <a href="/"> 238 apartments, </a>
                    <a href="/"> 84 homestays,</a>
                    <a href="/"> 37 hostels</a>

                </A>

            </Box>


            <Box>

                <ImgDiv
                    style={{backgroundImage: `url(https://cf.bstatic.com/xdata/images/city/400x300/684770.webp?k=221802a90ad365c271125637ebf0ee9b14f4ddcc18103125505b6eee013019f5&o=)`}}>
                    <ImgText>
                        <h1>New Delhi </h1>
                        <p> India</p>
                    </ImgText>
                </ImgDiv>

                <A>
                    <a href="/">398 vacation rentals, </a>
                    <a href="/"> 222 B&Bs,</a>
                    <a href="/"> 178 homestays,</a>
                    <a href="/">151 guest houses, </a>
                    <a href="/">
                        140 apartments </a>

                </A>

            </Box>


        </CarouselDiv>
    )

}