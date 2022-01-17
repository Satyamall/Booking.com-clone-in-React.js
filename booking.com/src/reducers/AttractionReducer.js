import {
    FETCHING,
    FETCH_FALIURE,
    FETCH_SUCCESS
} from "../actions/attractionActionType";



const initialState = {
    item: [],
    loading: false,
    error: null,
    totalpages: 1
};

function attractionReducer(state = initialState, {
    type,
    payload,
    error
}) {
    switch (type) {
        case FETCHING: {
            return {
                ...state,
                item: [],
                loading: true,
                error: null
            }
        }
        case FETCH_SUCCESS: {
            return {
                ...state,
                loading: false,
                item: payload,
                totalpages: payload.total_count
            }
        }
        case FETCH_FALIURE: {
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
export default attractionReducer;
