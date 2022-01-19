import styled from 'styled-components'

const Div = styled.div`
  background-color: #EBF3FF;
  padding: 10px;
  margin-right: 2px;
  flex-grow: 1;
  justify-content: center;

  a {
    margin: 0;
    font-weight: bold;
    text-align: center;
    display: block;
    text-decoration: none;
    color: #0071c2;
    cursor: pointer;
    font-size: 14px;
  }

  a:hover {
    color: #333;
  }
`

export const Box = (props) => {
    return (<Div>
        <a href={props.href}>
            {props.children}
        </a>
    </Div>)
}
