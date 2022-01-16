import React from 'react'
import styles from '../style/style.module.css'
import Section1Card from "../Card/Section1Card";

const ThirdSection = () => {
    return (<>
            <h3 className={styles.sectionTheeHeading}>Browse by property type</h3>
            <br/>
            <div className={styles.thirdSection}>
                {Section1Card()}
            </div>
        </>

    )
}

export default ThirdSection
