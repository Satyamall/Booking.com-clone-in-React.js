const initState = {
    isLoading: true,
    isError: false
  };
  
  function reducer(state = initState, {type,startLocation,returnLocation,startDate,returnDate}) {
    switch (type) {
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