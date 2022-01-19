import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import styles from './style/style.module.css'
const PlaceListCard = ( props ) => {
    let {url} = useRouteMatch();
    // console.log(url)
    const style = {
        width:"100%",
        border: "1px solid rgb(211, 211, 218)",
        display: "flex",
        marginTop: "10px",
        // height: "200px",
        alignItems: "center",
        cursor: "pointer"
    }
    const childStyle = {
        width: "100%",
        height: "200px",
        padding:"10px",
        // margin: "auto",
        // border: "1px solid red",
        display: "flex",
        // alignItems:"center"
    }
    const linkStyle = {
        textDecoration: "none"
    }
    return (
        <div style={ style } className={ styles.PlaceListCard }>
            <div style={ childStyle } className={ styles.PlaceList}>
                <div>
                    <img src={props.image} alt="" />
                </div>
                <div>
                    <div>{ props.country}</div>
                    <div>{ props.title }</div>
                    <div>{ props.shortDesc }</div>
                    <div>from</div>
                    <div>₹ { props.price }</div>
                    <div className={ styles.viewBtn}>
                      <Link to={`${url}/${props.id}`} style={linkStyle}>{`view  >`}</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PlaceListCard
