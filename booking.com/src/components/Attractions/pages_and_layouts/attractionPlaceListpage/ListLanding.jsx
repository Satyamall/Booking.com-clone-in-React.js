import React from 'react'
import PlaceListCard from '../PlaceListCard'
import SearchBox from '../SearchBox'
import styles from '../style/style.module.css'
import {useSelector} from "react-redux";
import Filter from '../Filter';
const ListLanding = () => {
    const countryList = useSelector( state => state.attractionPageNav )
    // console.log(countryList)
    return (
        <div className={styles.ListLanding}>
            <div className={styles.filterPlaceSide}>
                <h2>{countryList.item.length} things to do</h2>
                <h4>Filter</h4>
                <Filter/>
            </div>

            {/* flex section devider */}
            <div className={styles.listPlaceSide}>
                <SearchBox widthStatus={ true } />
                <div className={styles.popularHolder}>
                    <div className={styles.mostpopular}>Most popular</div>
                </div>
                <div>
                    {
                        countryList.item?.map( ( item ) =>
                            <PlaceListCard
                                key={item.id}
                    country={item.country}
                    title={item.heading}
                    shortDesc={item.sortDescription}
                    price={item.price}
                    image={item.image}
                />

                        )


                   }

                </div>

            </div>
        </div>
    )
}

export default ListLanding
