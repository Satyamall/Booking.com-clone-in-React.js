
export const getCarRequest = () => {
    return {
      type: "GET_CAR_REQUEST",
      payload: {
        isLoading: true
      }
    };
  };
  
  export const getCarSuccess = ({startLocation,returnLocation,startDate,returnDate}) => {
    return {
      type: "GET_CAR_SUCCESS",
      payload: {
        startLocation: startLocation,
        returnLocation: returnLocation,
        startDate: startDate,
        returnDate: returnDate,
      }
    };
  };
  
  export const getCarFailure = () => {
    return {
      type: "GET_CAR_FAILURE",
      payload: {
        isError: true
      }
    };
  };

  export const getDay=(day)=>{
      return {
        type: "GET_DAY",
        payload : {
          day: day
        }
      }
  }