import React from 'react'
import SearchBox from '../SearchBox';
import styles from "../style/style.module.css";
const FirstSection = () => {
    return (
        <div className={styles.firstSection}>
            <div>
                <div className={styles.topHeading}>Find and book a great experience</div>
                <div className={styles.topSubHeading}>Discover more of your destination and make the most of your trip
                </div>
                <SearchBox/>

            </div>
        </div>
    )
}

export default FirstSection
