export  const debounceFetching=()=>{
    return{
        type:"FETCHING_DEBOUNCE"
    }
}
export  const debounceFetchSuccess=(payload)=>{
    return{
        type:"FETCH_SUCCESS_DEBOUNCE",
        payload:payload
    }
}
export const debounceFetchFaliure=(error)=>{
    return{
        type:"FETCH_FALIURE_DEBOUNCE",
        error:error
    }
}
