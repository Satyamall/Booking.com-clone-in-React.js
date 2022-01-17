import React from 'react'
import Svg from '../Svg'
import Paths from '../SvgPaths'
import styles from '../style/style.module.css'
const FourthSection = () => {

    return (
        <div className={styles.FourthSection}>
            <h3>We've got you covered</h3>
            <div className={styles.outterFlex}>
                <div className={styles.innerFlex}>
                    <div>
                        <Svg path={ Paths.one } color="green" size="30px"/>
                    </div>
                    <div>
                        <h5>Explore top attractions</h5>
                        <div>Experience the best of your destination, with attractions, tours, activities and more</div>
                    </div>
                </div>

                <div className={styles.innerFlex}>
                    <div>
                    <Svg path={ Paths.two } color="green" size="30px"/>
                    </div>
                    <div>
                        <h5>Fast and flexible</h5>
                        <div>Book tickets online in minutes, with free cancellation on many attractions</div>
                    </div>
                </div>

                <div className={styles.innerFlex}>
                    <div>
                    <Svg path={ Paths.three } color="green" size="30px"/>
                    </div>
                    <div>
                        <h5>Support when you need it</h5>
                        <div>Booking.com's global Customer Service team is here to help 24/7</div>
                    </div>
                 </div>
            </div>

        </div>
    )
}

export default FourthSection
