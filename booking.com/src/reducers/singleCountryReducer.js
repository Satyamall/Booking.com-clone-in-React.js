


const initialState = {
    item: [],
    loading: false,
    error: null,
    totalpages: 1
};

function singleCountryReducer(state = initialState, {
    type,
    payload,
    error
}) {
    switch (type) {
        case "FETCHING_SINGLE": {
            return {
                ...state,
                item: [],
                loading: true,
                error: null
            }
        }
        case "FETCH_SUCCESS_SINGLE": {
            return {
                ...state,
                loading: false,
                item: payload,
                totalpages: payload.total_count
            }
        }
        case "FETCH_FALIURE_SINGLE": {
            return {
                ...state,
                loading: false,
                error: error
            }
        }
        default: {
            return state;
        }
    }
}
export default singleCountryReducer;
