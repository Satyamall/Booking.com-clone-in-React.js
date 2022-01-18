import styled from "styled-components"


const Cont = styled.div`
height :320px;
overflow: hidden; 
position:relative;
margin-bottom:20px;
border-radius: 3px;
:hover{
    cursor: pointer;
}
`

const Background = styled.div`
 
 height :320px;
background-position: center; 
background-repeat: no-repeat;
cursor: pointer;
transition: all 0.3s ease-in-out;
overflow: hidden; 
position: relative;
z-index: 1;
filter:brightness(0.8);


:hover{
    transform:scale(1.05,1.05);
    transition: all 0.3s ease-in-out;
}
`
const Text = styled.div`
position: absolute;
bottom: 0;
left:0;
width: 92%;
padding:12px;

z-index:100;
h1{
    margin: 0;
    font-size:20px;
    line-height:28px;
    color:#fff;
    font-weight:600;
}
p{
    margin: 0;
    font-size:14px;
    line-height:20px;
    color:#fff;
    font-weight:600;


}



`



export const ImageContainer = (props) => {

    return (
        <Cont style={{ width: props.wide }}>
            <Background style={{ backgroundImage: `url(${props.img})` }}>

            </Background>
            <Text>
                {props.children}

            </Text>




        </Cont>
    )
}