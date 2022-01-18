const initialState = {
    adultTicket: 0,
    childTicket: 0,
    date:0
}
function checkOutReducer(state=initialState, {type,payload}) {
    switch ( type ) {
        case "ADD_CHECK_OUT_DETAILS": {
            return {
                ...state,
                adultTicket: payload.adultTicket,
                childTicket:payload.childTicket
            }
        }
        case "ADD_DATE": {
            return {
                ...state,
                date:payload.date
            }
        }
        default: {
            return state
            }
    }
}
export default checkOutReducer;
