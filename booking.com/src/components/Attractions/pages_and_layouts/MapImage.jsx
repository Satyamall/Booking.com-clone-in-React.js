import React from 'react'
import Svg from './Svg'
import Paths from './SvgPaths'
const MapImage = (props) => {
    const style = {
        background: `url("https://raw.githubusercontent.com/geekypradip/images/main/Screenshot%20from%202022-01-16%2020-11-04.png") no-repeat`,
        width:props.width,
        height:props.height,


    }
    const fogback = {
        background: "rgba(0, 0, 0, 0.600)",
        height: "100%",
        color: "#fff",
        fontSize: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    return (
        <div style={style}>
            <div style={ fogback }>
                <div> <Svg path={ Paths.meetingPoint } color="#73f77e" size="30px"/></div>
                <div>{props.location}</div>
             </div>
        </div>
    )
}

export default MapImage
