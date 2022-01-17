import React, { useState } from 'react'
import { filterFetch, priceFilterFetch } from '../api/request';
import styles from './style/style.module.css'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import MapImage from './MapImage';
const Filter = () => {
    const { country } = useParams();
    console.log(country);
    const dispach = useDispatch()
    let [ filterState, setFilterState ] = useState( {
        Tours: false,
        Landmarks: false,
        Activities: false,
        Museums:false
    } )
    let [ priceState, setPriceState ] = useState( {
        less: 0,
        greater: 10000000000000
  })
console.log(priceState)

    let handleChange = ( e ) => {
        let tempObj = filterState;
        for ( let i in filterState ) {
            if ( e.target.name === i ) {
                console.log( "matched" , i)
                tempObj[ i ] = e.target.checked;
                break;

            }

        }

        setFilterState( ( obj ) => obj = tempObj );
        dispach( filterFetch( filterState,priceState,country) );

    }
    let handlePriceFilter = ( less, greater ) => {
        setPriceState({...priceState,less:less,greater:greater})
        dispach(priceFilterFetch(less, greater,filterState,country))
    }
    return (
        <div className={styles.FilterHolder}>
        <div className={styles.Filter}>
                <div>category</div>

            <div>
                    <input type="checkbox"
                        onChange={ handleChange }

                        name="Tours"
                    />
                <span>Tours</span>
            </div>
            <div>
                    <input type="checkbox"
                        onChange={ handleChange }

                        name="Landmarks"
                    />
                <span>Landmarks</span>
            </div>
            <div>
                    <input type="checkbox"
                        onChange={ handleChange }

                        name="Activities"
                    />
                <span>Activities</span>
            </div>
            <div>
                    <input type="checkbox"
                        onChange={ handleChange }

                        name="Museums"
                    />
                <span>Museums</span>
            </div>

            </div>

            <div className={styles.Filter}>
            <div>Price</div>
            <div>
                <input type="radio" name='price' onChange={()=>handlePriceFilter(0,1000)}/>
                <span>Rs. 0- Rs. 1000</span>
            </div>
            <div>
                <input type="radio" name='price' onChange={()=>handlePriceFilter(1700,3300)}/>
                <span>Rs. 1,694 - Rs. 3,388</span>
            </div>
            <div>
                <input type="radio" name='price' onChange={()=>handlePriceFilter(3300,6500)}/>
                <span>Rs. 3,388 - Rs. 6,351</span>
            </div>
            <div>
                <input type="radio" name='price' onChange={()=>handlePriceFilter(6500,10500)}/>
                <span>Rs. 6,351 - Rs. 10,585</span>
            </div>
            <div>
                <input type="radio" name='price' onChange={()=>handlePriceFilter(10500,100000000000000)}/>
                <span>Rs. 10,585+</span>
            </div>
                <div>
                    <MapImage width="100%" height="350px" location={ country}/>
            </div>
            </div>

        </div>

    )
}

export default Filter



// http://localhost:8000/attractionsData?price_gte=1000&price_lte=10000
