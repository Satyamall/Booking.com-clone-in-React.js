import React, { useState } from 'react';
import styled from 'styled-components';
import DeginationData from './DeginationData'




const Tab = styled.button`
margin-right:15px;
font-size:14px;
background:transparent;
border:none;
outline:none;
padding:5px 10px ;
cursor:pointer;
color:gray;
transition:all ease-in-out .2s;
border-bottom:2px solid transparent;
  ${({ active }) =>
    active &&
    `
    background-color:#0071C2;
    color:white;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const types = ['Regions', 'Cities', 'Place of interests'];
export default function Degination() {
  const [active, setActive] = useState(types[0]);
  return (
    <div style={{
      margin: "0 auto",
      width: "80%",
      textAlign: "left"
    }}>
      <h2>Destinations we love</h2>
      <ButtonGroup style={{ marginLeft: '1.3px' }}>
        {types.map(type => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>
      <hr style={{ border: "0.1px solid #0071C2", marginTop: "4px" }} />
      <DeginationData v={active}></DeginationData>
    </div>
  );
}