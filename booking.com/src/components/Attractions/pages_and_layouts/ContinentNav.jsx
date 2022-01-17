import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { FetchApi } from '../api/request'
import styles from './style/style.module.css'
const ContinentNav = () => {
    const dispach = useDispatch();
    useEffect(() => {
        dispach(FetchApi("Brazil"))

    }, [])
    var [ activeNav, setActiveNav ] = useState( {
        Europe: true,
        North_America: false,
        Asia: false,
        Africa: false,
        Ocenia: false,
        Middle_East: false,
        Caribbean: false,
        Central_America: false,
        South_America: false
    } )
    let handleNav = ( value,apiQuery ) => {
        let tempObj={}
        for ( let i in activeNav ) {
            if ( i === value )
                tempObj[ i ] = true;
            else
                tempObj[ i ] = false;
        }
        setActiveNav( tempObj );
        dispach(FetchApi(apiQuery))
    }
    return (
        <div className={styles.ContinentNav}>
            <div
                className={ activeNav.Europe ? styles.continentNavActive : "" }
                onClick={()=>handleNav("Europe","Brazil")}
            >Europe</div>
            <div
                className={ activeNav.North_America ? styles.continentNavActive : "" }
                onClick={()=>handleNav("North_America","United States")}
            >North Amerika</div>
            <div
                className={ activeNav.Asia ? styles.continentNavActive : "" }
                onClick={()=>handleNav("Asia","China")}
            >Asia</div>
            <div
                className={ activeNav.Africa ? styles.continentNavActive : "" }
                onClick={()=>handleNav("Africa","Russia")}
            >Africa</div>
            <div
                className={ activeNav.Ocenia ? styles.continentNavActive : "" }
                onClick={()=>handleNav("Ocenia","Argentina")}
            >Ocenia</div>
            <div
                className={ activeNav.Middle_East ? styles.continentNavActive : "" }
                onClick={()=>handleNav("Middle_East","United Kingdom")}
            >Middle East</div>
            <div
                className={ activeNav.Caribbean ? styles.continentNavActive : "" }
                onClick={()=>handleNav("Caribbean","Sweden")}
            >Caribbean</div>
            <div
                className={ activeNav.Central_America ? styles.continentNavActive : "" }
                onClick={()=>handleNav("Central_America","Indonesia")}
            >Central Amerika</div>
            <div
                className={ activeNav.South_America ? styles.continentNavActive : "" }
                onClick={()=>handleNav("South_America","France")}
            >South Amerika</div>
        </div>
    )
}

export default ContinentNav
