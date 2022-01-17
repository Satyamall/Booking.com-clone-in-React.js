import React from 'react'
import styles from './style/style.module.css'
const Card = (props) => {
    const style = {
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: "cover",
        width: props.width,
        height: props.height,
        cursor: "pointer",
        marginBottom:"10px"
    }
    return (
        <div style={style}>
            <div className={styles.card_background_fog_layout}>
                <div>{ props.place }</div>
                <div>{ props.thingsTodo}</div>
           </div>
        </div>
    )
}

export default Card
