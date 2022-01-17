const initState = {
    startLocation:"",
    returnLocation:"",
    startDate: "",
    returnDate: "",
    day: 0,
    isLoading: true,
    isError: false
  };
  
  function carreducer(state = initState, action) {
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
      case "GET_DAY":{
        return {
          ...state,
          day: action.payload.day
        }
      }
      default:
        return state;
    }
  }
  
  export default carreducer;