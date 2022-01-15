import React from 'react'
import styles from '../style/style.module.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const SecondSection = () => {
    return (
        <div className={styles.secondSection}>
            <div className={styles.secondSection_infoicon}>
                <InfoOutlinedIcon/>
            </div>
            <div className={styles.secondSection_infoText}>please check local guidance before planning your visit. <span>Read more</span></div>
        </div>
    )
}

export default SecondSection
