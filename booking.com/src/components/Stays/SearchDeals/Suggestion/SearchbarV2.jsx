import React from "react"
import styled from "styled-components"
import {useThrottle} from "use-throttle"

const SearchBarWrapper = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "BlinkMacSystemFont", "-apple-system", "Segoe UI", 'Roboto', 'Helvetica', 'Arial', 'sans-serif';
  display: flex;
  align-items: center;
  width: 280px;
  font-weight: 100;
  color: gray;
`
const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-weight: 500;
  background-color: inherit;
  font-family: "BlinkMacSystemFont", "-apple-system", "Segoe UI", 'Roboto', 'Helvetica', 'Arial', 'sans-serif';
  font-size: 15px;
  padding: 0.5%;
  color: rgb(85, 84, 84);
`
const RightSide = styled.div`

  & div > p {
    font-size: 24px;
    margin-top: -7px;
    cursor: pointer;
    font-weight: 400;
  }
`
const Spinner = styled.div`
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
const SuggestionBox = styled.div`
  display: ${({len}) => (len === 0 ? "none" : "flex")};
  position: absolute;
  flex-direction: column;
  flex: 0 0 auto;
  max-height: 300px;
  overflow: auto;
  overflow-y: hidden;
  top: 52%;
  left: 12%;
  border-radius: 10px;
  width: 359px;
  z-index: 4;
  background-color: white;
  box-shadow: 2px 2px 2px 2px #7c787849;

  & * {
    flex: 1;
    text-align: left;
    /* padding: 10px;  */
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  & > div:nth-child(${({active}) => active}) {
    background: #eeeaea88;
    color: #1f1e1e85;
    font-weight: 500;
  }

  & > div {
    height: 30px;
  }
`

export function SearchbarV2({setLoading, loading, suggestions, onChange}) {
    const [q, setQ] = React.useState("");
    const [active, setActive] = React.useState(0);
    const scrollRef = React.useRef();
    const throttleText = useThrottle(q, 1000);


    React.useEffect(() => {
        onChange(throttleText);
    }, [throttleText, onChange])
    const handleInputChange = (e) => {
        setQ(e.target.value);
        onChange(e.target.value);

        // setTimeout(() => {
        //     setLoading(false);
        // }, 5000)
    }
    const handleClear = () => {
        setQ("");
        onChange("")
        //setLoading(false);
    }
    const handleChangeActiveSuggestions = (e) => {
        switch (e.keyCode) {
            case 38: {
                if (active > 4) {
                    scrollRef.current.scrollTop -= 30;
                }
                if (active === 1) {
                    setActive(0);
                } else if (active <= 0) {
                    setActive(suggestions.length);
                } else {
                    setActive((prev) => prev - 1);
                }
                break;
            }
            case 40: {
                if (active >= suggestions.length) {
                    setActive(0);
                } else {
                    setActive((prev) => prev + 1);
                }
                if (active > 4) {
                    scrollRef.current.scrollTop += 30;
                }
                break;
            }
            case 13: {
                setQ(suggestions[active - 1])
                break;
            }
            default: {
                return;
            }
        }
    }
    return <>
        <SearchBarWrapper onKeyUp={handleChangeActiveSuggestions}>
            {/* <IconImage src="https://image.flaticon.com/icons/png/512/49/49116.png" alt="icon" /> */}
            <Input onChange={handleInputChange} value={q} placeholder="Where are you going?"/>
            <RightSide>
                {q && <div onClick={handleClear}>
                    <p>
                        x
                    </p>
                </div>}
                {loading && <Spinner/>}
            </RightSide>

        </SearchBarWrapper>
        {!loading && (<SuggestionBox ref={scrollRef} active={active} limit={5} len={suggestions.length}>
                {suggestions.map((item, index) => (<div key={index} onMouseOver={() => setActive(index + 1)}>
                        {item}
                    </div>))}
            </SuggestionBox>)}
    </>
}
