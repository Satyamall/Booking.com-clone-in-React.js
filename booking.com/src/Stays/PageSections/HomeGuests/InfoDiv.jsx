import styled from "styled-components"

const Div = styled.div`
width: 263px;
min-height: 150px;
margin-right:16px;

img{
    display: block;
    width: 100%;
    height: 263px;
    object-fit:cover;
    margin-bottom:16px;

}
h2, p{
    margin: 0;
}
h2{
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: rgb(51,51,51)
}
p{
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color:rgb(107, 107,107)  
}
`

export const InfoDiv = (props) => {


    return (<Div>
            {props.children}
        </Div>)
}
