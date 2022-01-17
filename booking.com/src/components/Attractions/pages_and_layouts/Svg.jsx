import React from 'react'

const Svg = (props) => {
    const style = {
        color: props.color,
        fill: props.color,
        width: props.size
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
