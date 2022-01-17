import React from 'react'

import styles from '../style/style.module.css'
import ContinentNav from '../ContinentNav'
const FifthSection = () => {

    // console.log(navState)
    return (
        <div className={styles.FifthSection}>
            <h3 className={styles.fifthHeading}>Explore more destinations</h3>
            <div className={ styles.fifthSubheading }>Find things to do in cities around the world</div>
            <div>
                <ContinentNav/>
            </div>
        </div>
    )
}

export default FifthSection
