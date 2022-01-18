import './home.css';


import manchester from './image/manchester.png';
import leeds from './image/leeds.png';
import reading from './image/reading.png';
import newcastle from './image/newcastle.png';
import birmingam from './image/birmingam.png';




function FirstPage() {
    return (
        <div>

            <div className="main">

                <div className="things">

                    <div className="rentCar">
                        <div className="imglog">
                            <svg viewBox="0 0 24 24" width="1.5rem" fill="white" stroke="#107AC6" height="2rem"><path d="M21.75,17a1.5,1.5,0,0,0,1.5-1.5V13.249a1.811,1.811,0,0,0-.53-1.279L20.25,9.5H3.75L1.28,11.97a1.811,1.811,0,0,0-.53,1.279V15.5A1.5,1.5,0,0,0,2.25,17Z" className="a"></path><path d="M.912,12.5H4.629a1.5,1.5,0,0,1,1.06.439L6.75,14" className="a"></path><path d="M23.088,12.5H19.371a1.5,1.5,0,0,0-1.06.439L17.25,14" className="a"></path><path d="M3.75,9.5l1.7-4.54A2.249,2.249,0,0,1,7.559,3.5h8.882a2.249,2.249,0,0,1,2.106,1.46l1.7,4.54Z" className="a"></path><path d="M3.75 9.5L2.25 8 0.75 8" className="a"></path><path d="M20.25 9.5L21.75 8 23.25 8" className="a"></path><path d="M2.25,17v1.5a1.5,1.5,0,0,0,3,0V17Z" className="a"></path><path d="M21.75,17v1.5a1.5,1.5,0,0,1-3,0V17Z" className="a"></path></svg>

                        </div>
                        <div className="margin">
                            <span>Rent a car</span>
                            <p>Hundreds of cars and 24/7 customer <br /> service</p>
                        </div>
                    </div>

                    <div className="rentCar">
                        <div className="imglog">
                            <svg viewBox="0 0 24 24" width="1.5rem" fill="white" stroke="#107AC6" height="2rem">
                                <path d="M21 15.5L21 8" className="a"></path><path d="M4.5 15.5L4.5 8" className="a"></path><path d="M3 8L6 8" className="a"></path><path d="M9,15.5v-6a1.5,1.5,0,0,1,3,0v6" className="a"></path><path d="M9 12.5L12 12.5" className="a"></path><path d="M15 8L18 15.5" className="a"></path><path d="M18 8L15 15.5" className="a"></path><path d="M0.75 4.25L23.25 4.25" className="a"></path><path d="M0.75 19.25L23.25 19.25" className="a"></path></svg>
                        </div>
                        <div className="margin">
                            <span>Book an airport taxi</span>
                            <p>A driver will be waiting to get you to <br /> your stay</p>
                        </div>
                    </div>

                    <div className="rentCar">
                        <div className="imglog">

                            <svg id="Regular" width="1.5rem" fill="white" stroke="#107AC6" height="2rem">
                                <circle cx="12" cy="3" r="2.25" className="cls-1"></circle><circle cx="19.5" cy="7.5" r="2.25" className="cls-1"></circle><circle cx="4.5" cy="7.5" r="2.25" className="cls-1"></circle><circle cx="19.5" cy="15" r="2.25" className="cls-1"></circle><circle cx="12" cy="11.25" r="2.25" className="cls-1"></circle><circle cx="4.5" cy="15" r="2.25" className="cls-1"></circle><path d="M18.123,16.779a8.251,8.251,0,0,1-3.385,2.256" className="cls-1"></path><path d="M20.1,9.669a8.335,8.335,0,0,1,.017,3.068" className="cls-1"></path><path d="M14.23,3.305a8.251,8.251,0,0,1,3.893,2.416" className="cls-1"></path><path d="M5.877,5.721A8.251,8.251,0,0,1,9.77,3.305" className="cls-1"></path><path d="M3.9,12.831a8.352,8.352,0,0,1,0-3.162" className="cls-1"></path><path d="M9.262,19.035A8.267,8.267,0,0,1,5.924,16.83" className="cls-1"></path><path d="M7.991,22.186a.75.75,0,0,0,.681,1.064h6.656a.75.75,0,0,0,.681-1.064l-3.328-8.25a.75.75,0,0,0-1.362,0Z" className="cls-1"></path></svg>

                        </div>
                        <div className="margin">
                            <span>Find things to do</span>
                            <p>Instant confirmation, digital tickets <br /> and verified customer reviews</p>
                        </div>
                    </div>

                </div>

                <div className="Cities">

                    <div className="manchester">
                        <img src={manchester} alt="avatar2" />
                        <span className="headmanchester">Manchester</span>
                        <p className="childmanchester">1,096 properties</p>
                    </div>
                    <div className="manchester">
                        <span className="headmanchester">Leeds</span>
                        <p className="childmanchester">276 properties</p>
                        <img src={leeds} alt="avatar2" />
                    </div>

                </div>

                <div className="citythree">
                    <div className="manchester">
                        <img src={reading} alt="avatar2" />
                        <span className="headmanchester">reading</span>
                        <p className="childmanchester">276 properties</p>
                    </div>
                    <div className="manchester">
                        <img src={newcastle} alt="avatar2" />
                        <span className="headmanchester">newcastle</span>
                        <p className="childmanchester">381 properties</p>
                    </div>
                    <div className="manchester">
                        <img src={birmingam} alt="avatar2" />
                        <span className="headmanchester">birmingam</span>
                        <p className="childmanchester">1,010 properties</p>
                    </div>
                </div>


            </div>

        </div>
    )

}



export default FirstPage
