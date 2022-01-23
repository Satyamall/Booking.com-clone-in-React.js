export const checkOutdetails = (payload) => {
    return {
        type: "ADD_CHECK_OUT_DETAILS",
        payload: payload
    }
}
export const addDateForCheckout = (payload) => {
    return {
        type: "ADD_DATE",
        payload: payload
    }
}
