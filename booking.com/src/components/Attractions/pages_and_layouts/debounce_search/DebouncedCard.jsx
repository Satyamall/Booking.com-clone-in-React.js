import React from 'react'
import { useSelector } from 'react-redux'
import { Link,useRouteMatch } from 'react-router-dom';
import styles from '../style/style.module.css'
const DebouncedCard = () => {
    let { url } = useRouteMatch();
    if(url.length>12)
    url = url.split( "" ).splice( 0, 12 ).join( "" );
    console.log( url );
    const datas = useSelector( ( state ) => state.debounce );
    const style = {
        width: '40%',
        borderRadius: "5px",
        backgroundColor: "#fff",
        overflow: "scroll",

    }
    return (
        <div style={ style } className={ styles.removeScrol }>
            <div>Destinations</div>
            {
                datas.item.map( ( item ) =>
                    <Link to={ `${url}/${item.country}` } style={ { textDecoration: "none", color: "#302e2e" } }
                        key={ item.id }
                        onClick={ () => {
                            setTimeout(function(){
                                window.location.reload( false )
                           }, 500);
                        } }>
                     <div
                        className={ styles.debounceList}>
                        <div style={{width:"40px",marginRight:"10px"}}>
                            <img src={item.image } alt="" />
                        </div>
                        <div className={ styles.info}>
                            <span>{ item.heading}</span>  -   <span>{ item.city }</span>
                            <div>{item.country }</div>
                        </div>
                    </div>
                    </Link>

            )
        }

        </div>
    )
}

export default DebouncedCard
