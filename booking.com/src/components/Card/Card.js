import React from 'react'
import styles from '../style/style.module.css'

const Card = (props) => {
    const style = {
        width: props.width,
        height: props.height,
        backgroundImage: `url(${props.image})`,
        backgroundSize: "contain",
        cursor: "pointer"
    }

    return (
        <div style={style}>
            <div className={styles.card_background_fog_layout}>
            </div>
            <h3 className={styles.h3_card}>{props.h3_val}</h3>
            <p className={styles.para_card}>{props.para_val}</p>
        </div>
    )
}

export default Card