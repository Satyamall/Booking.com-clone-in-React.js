import React from 'react'

const Svg = (props) => {
    const style = {
        color: "#008009",
        fill: "#008009",
        width:"30px"
    }
    return (
        <div style={style}>
            <svg viewBox="0 0 24 24">
                <path d={ props.path }></path>
            </svg>
        </div>
    )
}

export default Svg
