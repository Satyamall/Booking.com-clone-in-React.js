const initState = {
    startLocation:"",
    returnLocation:"",
    startDate: "",
    returnDate: "",
    isLoading: true,
    isError: false
  };
  
  function reducer(state = initState, action) {
    switch (action.type) {
      case "GET_CAR_REQUEST": {
        return {
          ...state,
          isLoading: true,
          isError: false
        };
      }
      case "GET_CAR_SUCCESS": {
        return {
          ...state,
          startLocation: action.payload.startLocation,
          returnLocation: action.payload.returnLocation,
          startDate: action.payload.startDate,
          returnDate: action.payload.returnDate,
          isLoading: false
        };
      }
      case "GET_CAR_FAILURE": {
        return {
          ...state,
          isLoading: false,
          isError: true
        };
      }
      default:
        return state;
    }
  }
  
  export default reducer;