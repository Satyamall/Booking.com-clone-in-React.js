

// export const GetRepo=(query)=>{
//     return{
//         type:GETREPO,
//         payload:query
//     }
// }

import { FETCHING, FETCH_SUCCESS, FETCH_FALIURE } from "./attractionActionType"



export  const Fetching=()=>{
    return{
        type:FETCHING
    }
}
export  const FetchSuccess=(payload)=>{
    return{
        type:FETCH_SUCCESS,
        payload:payload
    }
}
export const FetchFaliure=(error)=>{
    return{
        type:FETCH_FALIURE,
        error:error
    }
}
