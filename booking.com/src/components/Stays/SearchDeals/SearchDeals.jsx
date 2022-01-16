import styles from "./SearchDeals.module.css"
import React, {useState} from "react"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Button from "@mui/material/Button";
import SearchBar from "./Suggestion/Searchbar";
import Link from "react-router-dom/es/Link";

export const SearchDeals = (props) => {
    const suggestionPlaces = props.suggestions;
    const [startValue, onStartValueChange] = useState(new Date());
    const [endValue, onEndValueChange] = useState(new Date());
    const [startDate, setStartDate] = useState(false)
    const [endDate, setEndDate] = useState(false)
    const [selector, setSelector] = useState(false)
    const [currentMonth, currentDay, currentDayNum] = endDatePicker(startValue.getDay(), startValue.getMonth(), startValue.getDate())
    const [endMonth, endDay, endDayNum] = endDatePicker(endValue.getDay(), endValue.getMonth(), endValue.getDate())

    const [adults, setAdults] = useState(2)
    const [children, setChildren] = useState(0)
    const [rooms, setRooms] = useState(2)

    const [query, setQuery] = useState("");


    const handleStartDate = () => {
        setStartDate(!startDate)
        setEndDate(false)
        setSelector(false)

    }
    const handleEndDate = () => {
        setStartDate(false)
        setEndDate(!endDate)
        setSelector(false)

    }
    const handleSelector = () => {
        setStartDate(false)
        setEndDate(false)
        setSelector(!selector)
    }

    const handleAdults = (v) => {
        setAdults((prev) => {
            let x = prev + v;
            if (x < 1) {
                return 1
            } else {
                return x
            }
        })
    }
    const handleChildren = (v) => {
        setChildren((prev) => {
            let x = prev + v;
            if (x < 0) {
                return 0
            } else {
                return x
            }
        })
    }
    const handleRooms = (v) => {
        setRooms((prev) => {
            let x = prev + v;
            if (x < 1) {
                return 1
            } else {
                return x
            }
        })
    }


    return <div className={styles.main}>
        <div className={styles.searchDealsContainer}>
            <div className={styles.searchDealsBars}>
                <div className={styles.search}>
                    <div className={styles.svgImg}>
                        <img
                            src="https://cf.bstatic.com/static/img/cross_product_index/accommodation/07ca5cacc9d77a7b50ca3c424ecd606114d9be75.svg"
                            alt="icon"/>
                    </div>
                    <div className={styles.input}>
                        <SearchBar
                            suggestions={suggestionPlaces}
                            onChange={(value) => {
                                setQuery(value)
                            }}
                        />
                    </div>
                </div>
                <div className={styles.calender}>
                    <div className={styles.calenderPermnantItems}>
                        <div>
                            <svg fill="#BDBDBD" focusable="false" height="20" role="presentation" width="20"
                                 viewBox="0 0 128 128">
                                <path
                                    d="m112 16h-16v-8h-8v8h-48v-8h-8v8h-16c-4.4 0-8 3.9-8 8.7v86.6c0 4.8 3.6 8.7 8 8.7h96c4.4 0 8-3.9 8-8.7v-86.6c0-4.8-3.6-8.7-8-8.7zm0 95.3a1.1 1.1 0 0 1 -.2.7h-95.6a1.1 1.1 0 0 1 -.2-.7v-71.3h96zm-68-43.3h-12v-12h12zm0 28h-12v-12h12zm26-28h-12v-12h12zm0 28h-12v-12h12zm26 0h-12v-12h12zm0-28h-12v-12h12z"
                                    fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <div onClick={handleStartDate}>
                            <p>{currentDay}</p>
                            <p>{currentDayNum}</p>
                            <p>{currentMonth}</p>
                            -
                        </div>
                        <div>
                            -
                        </div>
                        <div onClick={handleEndDate}>
                            <p>
                                {endDay}
                            </p>

                            <p>
                                {endDayNum}

                            </p>
                            <p>
                                {endMonth}

                            </p>

                        </div>
                    </div>
                    <div className={styles.calender}>
                        {startDate && <div className={styles.calenderItem}>
                            <p className={styles.datePicke}>Start Date</p>
                            <Calendar
                                onChange={onStartValueChange}
                                value={startValue}
                                className={styles.cal1}
                            />
                        </div>}
                        {endDate && <div className={styles.calenderItem2}>
                            <p className={styles.datePicke}>End date</p>
                            <Calendar
                                onChange={onEndValueChange}
                                value={endValue}
                                className={styles.cal1}

                            />
                        </div>}
                    </div>
                </div>
                <div className={styles.selector}>
                    <div className={styles.manIcon}>
                        <img
                            src="https://cf.bstatic.com/static/img/cross_product_index/guest/b2e5f2aa32b71ca0fc66aa671e4e958bcd69b7d0.svg"
                            alt="manSVG"/>
                    </div>
                    <div className={styles.selectorItems} onClick={() => handleSelector()}>
                        <p>
                            {adults} adults .
                        </p>
                        <p>
                            {children} children .
                        </p>
                        <p>
                            {rooms} rooms
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://cf.bstatic.com/static/img/cross_product_index/toggle/fb6f63d62231f9fe552d79b5448620b2e63c726e.svg"
                            alt="corousel"/>
                    </div>
                    {selector && <div className={styles.selectorDropDown}>
                        <div className={styles.adult}>
                            <div>
                                <h4>Adults</h4>
                            </div>
                            <div>
                                <div className={styles.button}>
                                    <button
                                        onClick={() => handleAdults(-1)}
                                    >-
                                    </button>
                                </div>
                                <div>
                                    <h4>{adults}</h4>
                                </div>
                                <div className={styles.button}>
                                    <button
                                        onClick={() => handleAdults(1)}

                                    >+
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.adult}>
                            <div>
                                <h4>Children</h4>

                            </div>
                            <div>
                                <div className={styles.button}>

                                    <button
                                        onClick={() => handleChildren(-1)}
                                    >-
                                    </button>
                                </div>
                                <div>
                                    <h4>{children}</h4>
                                </div>
                                <div className={styles.button}>

                                    <button
                                        onClick={() => handleChildren(1)}

                                    >+
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.adult}>
                            <div>
                                <h4>Rooms</h4>

                            </div>
                            <div>
                                <div className={styles.button}>

                                    <button
                                        onClick={() => handleRooms(-1)}
                                    >-
                                    </button>
                                </div>
                                <div>
                                    <h4>{rooms}</h4>
                                </div>
                                <div className={styles.button}>
                                    <button
                                        onClick={() => handleRooms(1)}
                                    >+
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className={styles.button}>
                    <Link to={{
                        pathname: "/search",
                        state: {
                            currentDay,
                            currentMonth,
                            currentDayNum,
                            endDay,
                            endMonth,
                            endDayNum,
                            adults,
                            children,
                            rooms,
                            query
                        }
                    }} style={{textDecoration: 'none'}}>
                        <Button variant="contained">Search</Button>
                    </Link>
                </div>
            </div>
            <div className={styles.lowerText}>
                <input type="checkbox"/>
                <p>I'm travelling for work</p>
            </div>
        </div>
    </div>
}


function endDatePicker(D, M, day) {
    let month = [];
    for (let i = 0; i < 12; i++) {
        month.push(0)
    }
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "March";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "Aug";
    month[8] = "Sept";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

    let weekday = [];
    for (let i = 0; i < 7; i++) {
        weekday.push(0)
    }
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thur";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
    let currentDay = weekday[D];

    let currentMonth = month[M];

    return [currentMonth, currentDay, day]
}
