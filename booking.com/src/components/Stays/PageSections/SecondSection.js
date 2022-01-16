import React from 'react'
import styles from '../style/style.module.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const SecondSection = () => {
    return (<div className={styles.secondSection}>
            <div className={styles.secondSection_infoicon}>
                <InfoOutlinedIcon/>
            </div>
            <div className={styles.secondSection_infoText}>Get the advice you need. Check the latest COVID-19
                restrictions before you travel. <span>Learn more</span></div>
        </div>)
}

export default SecondSection
