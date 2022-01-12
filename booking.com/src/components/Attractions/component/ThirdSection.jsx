
import React from 'react'
import styles from '../style/style.module.css'
import Card from './Card'
const ThirdSection = () => {
    return (
        <>
            <h3 className={styles.sectionTheeHeading}>Top destination</h3>
            <div className={ styles.thirdSection }>
            <Card
                width="350px"
                height="200px"
                backgroundImage="https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72203688.jpg?k=882dfd9985340ffb2a8553b56580d2139455c38e310899b3949b6dff9a8590df&o="
                place="Dubai"
                thingsTodo="477 things to do"
            />
            <Card
                width="350px"
                height="200px"
                backgroundImage="https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72204269.jpg?k=dda35f09d4db949aa6786bc25686bddd016cdd12a2603193e90df0d44a51a1ac&o="
                place="London"
                thingsTodo="267 things to do"
            />
            <Card
                width="350px"
                height="200px"
                backgroundImage="https://q-xx.bstatic.com/xdata/images/city/720x405/654667.jpg?k=38b7cadbc436ac8f1990d593aeea431bdca024ad7e19136de1a648a741efd1d2&o="
                place="Istanbul"
                thingsTodo="158 things to do"
            />
        </div>
        </>

    )
}

export default ThirdSection
