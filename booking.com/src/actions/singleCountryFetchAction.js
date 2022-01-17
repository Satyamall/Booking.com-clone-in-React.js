



export  const singleCountryFetching=()=>{
    return{
        type:"FETCHING_SINGLE"
    }
}
export  const singleCountryFetchSuccess=(payload)=>{
    return{
        type:"FETCH_SUCCESS_SINGLE",
        payload:payload
    }
}
export const singleCountryFetchFaliure=(error)=>{
    return{
        type:"FETCH_FALIURE_SINGLE",
        error:error
    }
}
