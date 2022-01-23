import React from 'react'
import styles from './style/style.module.css';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
const AttractionPlaceSpac = () => {
    return (
        <div className={styles.AttractionPlaceSpac}>
            <h1>why visit</h1>
            <div>
                <div> <CheckIcon/></div>
                <div>Panoramic views of Barcelona</div>
            </div>
            <div>
                <div> <CheckIcon/></div>
                <div>Panoramic views of Barcelona</div>
            </div>
            <div>
                <div> <CheckIcon/></div>
                <div>Panoramic views of Barcelona</div>
            </div>
            <div>
                <div> <CheckIcon/></div>
                <div>Panoramic views of Barcelona</div>
            </div>



            <h1>whats included</h1>
            <div>
                <div> <CloseIcon/></div>
                <div>Panoramic views of Barcelona</div>
            </div>
            <div>
                <div> <CheckIcon/></div>
                <div>Panoramic views of Barcelona</div>
            </div>
            <div>
                <div> <CheckIcon/></div>
                <div>Panoramic views of Barcelona</div>
            </div>
            <div>
                <div> <CloseIcon/></div>
                <div>Panoramic views of Barcelona</div>
            </div>


            <h1>What you need to know</h1>
            <div>Masks are required inside the cabins and all facilities.</div>
            <div>Please present your mobile voucher at the boarding point.

            </div>
            <div>
            Operated by Projectes i Serveis de Mobilitat SA
            </div>
        </div>
    )
}

export default AttractionPlaceSpac
