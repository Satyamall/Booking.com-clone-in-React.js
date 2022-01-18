import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../style/style.module.css'
import Card from '../Card';
import LoadingScreen from 'react-loading-screen'
import { Link } from 'react-router-dom';
import { FetchApi } from '../../api/request';

const SixthSection = () => {
    const dispach = useDispatch();
    const navState = useSelector( ( state ) => state.attraction );
    React.useEffect(() => {
        dispach(FetchApi("Brazil"))

    },[])
    console.log( navState );
    const linkStyle = {
        textDecoration: 'none',
    }
    return (
    <LoadingScreen
        loading={ navState.loading}
        bgColor='#f1f1f1'
        spinnerColor='#9ee5f8'
        textColor='#676767'
        // logoSrc='/logo.png'
        text='Loading...'
    >
    <div className={styles.SixthSection}>
                {
                    navState.item.map( ( item ) =>
                        <Link to={`attractions/${item.country}`}
                            key={ item.id }
                            style={linkStyle}
                        >
                             <Card width="250px"
                            height="150px"
                            place={ item.city }
                            thingsTodo={ `${item.ratings} things to do` }
                            backgroundImage={ item.image }

                        />
                       </Link>




                    )
                }
            </div>
  </LoadingScreen>


    )
}

export default SixthSection;
