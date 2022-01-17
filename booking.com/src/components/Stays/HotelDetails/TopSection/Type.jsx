import styled from 'styled-components'


const Div = styled.div`


  p {
    display: inline-block;
    font-size: 12px;
    font-weight: normal;
    line-height: 18px;
    vertical-align: middle;
    margin-top: -5px;
    padding: 0 4px;
    border-radius: 3px;
    background: #aeaeae;
    color: #fff;


  }

`

export const Type = (props) => {

    return (<Div>
        <p>

            {props.children}
        </p>

    </Div>)

}
