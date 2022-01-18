import React from 'react'
import PlaceListCard from '../PlaceListCard'
import SearchBox from '../SearchBox'
import styles from '../style/style.module.css'
import {useDispatch, useSelector} from "react-redux";
import Filter from '../Filter';
import { useParams } from 'react-router-dom';
import { FetchApi } from '../../api/request';
const ListLanding = () => {
    const countryList = useSelector( state => state.attraction );
    const { country } = useParams();
    const dispatch = useDispatch();
   React. useEffect( () => {
        dispatch(FetchApi(country))
    },[])
    // console.log(country)
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
                    id={item.id}
                />

                        )


                   }

                </div>

            </div>
        </div>
    )
}

export default ListLanding
