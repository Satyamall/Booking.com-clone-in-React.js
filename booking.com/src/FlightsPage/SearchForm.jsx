import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import style from "./flights.module.css";
import "react-datepicker/dist/react-datepicker.css";
import {Link} from "react-router-dom"

function SearchForm() {
  const [startDate, setStartDate] = useState(null);
  const [value, setValue] = useState("Economy");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div className={style.head}>
        <div className={style.flightformcont}>
          <div className={style.flightformoutmost}>
            <div className={style.flightformbox}>
              <div className={style.flightform}>
                <div className={style.flightformfilter}>
                  <div className={style.flightformradio}>
                    <FormControl component="fieldset">  
                      <RadioGroup
                        row
                        aria-label="radio"
                        value={value}
                        onChange={handleChange}
                        name="controlled-radio-buttons-group"
                        defaultValue="One-way"
                      >
                        <FormControlLabel
                          value="Round-trip"
                          control={<Radio />}
                          label="Round-trip"
                        />
                        <FormControlLabel
                          value="One-way"
                          control={<Radio />}
                          label="One-way"
                          
                        />
                        <FormControlLabel
                          value="Multi-city"
                          control={<Radio />}
                          label="Multi-city"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <NativeSelect>
                      <option value="Economy">Economy</option>
                      <option value="Premium Economy">Premium Economy</option>
                      <option value="Business">Business</option>
                      <option value="First-class">First-class</option>
                    </NativeSelect>
                  </FormControl>
                </div>
                <div className={style.yellowBox}>
                  <div>
                    <div
                      className={style.inputGroup}
                      aria-label="Where from?"
                      data-testid="searchbox_origin"
                      style={{ flex: "2 1 0%" }}
                    >
                      <div className={style.svg}>
                        <svg
                          viewBox="0 0 24 24"
                          fill="#BDBDBD"
                          width="20"
                          height="20"
                        >
                          <path d="M20.505 7.5l-15.266.022.672.415-1.1-2.2a.75.75 0 00-.638-.414l-2.293-.1C.82 5.228-.003 6.06.003 7.083c.002.243.051.484.146.709l2.072 4.68a2.947 2.947 0 002.701 1.778h4.043l-.676-1.075-2.484 5.168A1.831 1.831 0 007.449 21h2.099a1.85 1.85 0 001.419-.664l5.165-6.363-.582.277h4.956c1.82.09 3.399-1.341 3.49-3.198l.004-.134a3.426 3.426 0 00-3.44-3.419l-.074.001zm.02 1.5h.042a1.924 1.924 0 011.933 1.914l-.002.065a1.866 1.866 0 01-1.955 1.772l-4.993-.001a.75.75 0 00-.582.277l-5.16 6.355a.346.346 0 01-.26.118h-2.1a.336.336 0 01-.3-.49l2.493-5.185a.75.75 0 00-.676-1.075H4.924a1.45 1.45 0 01-1.328-.878l-2.07-4.676a.35.35 0 01.326-.474l2.255.1-.638-.415 1.1 2.2a.75.75 0 00.672.415L20.507 9zm-4.202-1.24l-2.992-4.02A1.851 1.851 0 0011.85 3H9.783a1.85 1.85 0 00-1.654 2.672l1.439 2.91a.75.75 0 001.344-.664l-1.44-2.911a.351.351 0 01.312-.507h2.066a.35.35 0 01.279.14l2.99 4.017a.75.75 0 101.203-.896z"></path>
                        </svg>
                      </div>
                      <div className={style.inputDiv}>
                        <span className={style.span}>
                          <div role="button" tabindex="0">
                            <div className={style.inputContainer}>
                              <input
                                className={style.SearchboxInput}
                                readOnly=""
                                type="text"
                                placeholder="Where from?"
                                value="LKO"
                              />
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className={style.arrow}>
                      <div>
                        <svg
                          viewBox="0 0 24 24"
                          fill="#0071C2"
                          width="32"
                          height="24"
                        >
                          <path d="M10.5 15.75h12.75a.75.75 0 000-1.5H10.5a.75.75 0 000 1.5zm9.22-3.22l3 3v-1.06l-3 3a.75.75 0 101.06 1.06l3-3a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06zM13.5 8.25H.75a.75.75 0 000 1.5H13.5a.75.75 0 000-1.5zm-9.22 3.22l-3-3v1.06l3-3a.75.75 0 00-1.06-1.06l-3 3a.75.75 0 000 1.06l3 3a.75.75 0 001.06-1.06z"></path>
                        </svg>
                      </div>
                    </div>
                    <div
                      className={style.inputGroup}
                      aria-label="Where to?"
                      data-testid="searchbox_destination"
                    >
                      <div className={style.inputDiv}>
                        <span className={style.span}>
                          <div role="button" tabindex="0">
                            <div className={style.inputContainer}>
                              <input
                                className={style.SearchboxInput}
                                readOnly=""
                                type="text"
                                placeholder="Where to?"
                                value="JAI"
                              />
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className={style.DateInputGroup} aria-label="When?">
                      <div>
                        <div style={{ width: "100%" }}>
                          <span className={style.span}>
                            <div role="button" tabindex="0">
                              <div className={style.dateInputGroup}>
                                <div className={style.DateInput}>
                                  <div
                                    className={style.dateInputContainer}
                                    data-testid="searchbox_calendar"
                                  >
                                    <div className={style.dateSvg}>
                                      <svg
                                        viewBox="0 0 24 24"
                                        fill="#BDBDBD"
                                        width="20"
                                        height="20"
                                      >
                                        <path d="M22.5 13.5v8.25a.75.75 0 01-.75.75H2.25a.75.75 0 01-.75-.75V5.25a.75.75 0 01.75-.75h19.5a.75.75 0 01.75.75v8.25zm1.5 0V5.25A2.25 2.25 0 0021.75 3H2.25A2.25 2.25 0 000 5.25v16.5A2.25 2.25 0 002.25 24h19.5A2.25 2.25 0 0024 21.75V13.5zm-23.25-3h22.5a.75.75 0 000-1.5H.75a.75.75 0 000 1.5zM7.5 6V.75a.75.75 0 00-1.5 0V6a.75.75 0 001.5 0zM18 6V.75a.75.75 0 00-1.5 0V6A.75.75 0 0018 6zM5.095 14.03a.75.75 0 101.06-1.06.75.75 0 00-1.06 1.06zm.53-1.28a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25.75.75 0 000 1.5.375.375 0 110-.75.375.375 0 010 .75.75.75 0 000-1.5zm-.53 6.53a.75.75 0 101.06-1.06.75.75 0 00-1.06 1.06zm.53-1.28a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25.75.75 0 000 1.5.375.375 0 110-.75.375.375 0 010 .75.75.75 0 000-1.5zm5.845-3.97a.75.75 0 101.06-1.06.75.75 0 00-1.06 1.06zm.53-1.28A1.125 1.125 0 1012 15a1.125 1.125 0 000-2.25.75.75 0 000 1.5.375.375 0 110-.75.375.375 0 010 .75.75.75 0 000-1.5zm-.53 6.53a.75.75 0 101.06-1.06.75.75 0 00-1.06 1.06zM12 18a1.125 1.125 0 100 2.25A1.125 1.125 0 0012 18a.75.75 0 000 1.5.375.375 0 110-.75.375.375 0 010 .75.75.75 0 000-1.5zm5.845-3.97a.75.75 0 101.06-1.06.75.75 0 00-1.06 1.06zm.53-1.28a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25.75.75 0 000 1.5.375.375 0 110-.75.375.375 0 010 .75.75.75 0 000-1.5zm-.53 6.53a.75.75 0 101.06-1.06.75.75 0 00-1.06 1.06zm.53-1.28a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25.75.75 0 000 1.5.375.375 0 110-.75.375.375 0 010 .75.75.75 0 000-1.5z"></path>
                                      </svg>
                                    </div>
                                    <div className={style.datepicker}>
                                      <DatePicker
                                        dateFormat="dd/MM/yyyy"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        disabledKeyboardNavigation
                                        placeholderText="Depart"
                                        className={style.date}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      className={style.search}
                    >
                     <Link className={style.btnLink} to={`/flights/${startDate}`}>Search</Link>
                    </button>
                  </div>
                </div>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Direct flights only"
                  />
                </FormGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchForm;