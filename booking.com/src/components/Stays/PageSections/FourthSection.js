import React from 'react'

import manchester from './image/manchester.png';
import leeds from './image/leeds.png';
import reading from './image/reading.png';
import newcastle from './image/newcastle.png';
import birmingam from './image/birmingam.png';

const FourthSection = () => {

    return (
        <div className="FourthSection-div">
            <div className="Cities">

                <div className="manchester">
                    <img src={manchester} alt="avatar2"/>
                    <span className="headmanchester">Manchester</span>
                    <p className="childmanchester">1,096 properties</p>
                </div>
                <div className="manchester">
                    <span className="headmanchester">Leeds</span>
                    <p className="childmanchester">276 properties</p>
                    <img src={leeds} alt="avatar2"/>
                </div>

            </div>

            <div className="citythree">
                <div className="manchester">
                    <img src={reading} alt="avatar2"/>
                    <span className="headmanchester">reading</span>
                    <p className="childmanchester">276 properties</p>
                </div>
                <div className="manchester">
                    <img src={newcastle} alt="avatar2"/>
                    <span className="headmanchester">newcastle</span>
                    <p className="childmanchester">381 properties</p>
                </div>
                <div className="manchester">
                    <img src={birmingam} alt="avatar2"/>
                    <span className="headmanchester">birmingam</span>
                    <p className="childmanchester">1,010 properties</p>
                </div>
            </div>

        </div>
    )
}

export default FourthSection