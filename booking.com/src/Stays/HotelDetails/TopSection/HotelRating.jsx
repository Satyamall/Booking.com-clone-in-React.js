import React from 'react';
import Rating from '@material-ui/lab/Rating';
import styled from 'styled-components'

const Div = styled.div`
  margin-left: 10px;
  margin-top: 10px;
`
export default function HotelRating(props) {
    return (<Div>
        <Rating name="size-small" value={props.num} max={Number(props.num)} size="small"/>
    </Div>);
}

