import {GET_SUGGESTION} from '../types'

const initialState = {
    suggestions: [], loading: true,
}

export default function (state = initialState, action) {

    switch (action.type) {
        case GET_SUGGESTION:
            return {
                ...state, suggestions: action.payload, loading: false
            }
        default:
            return state
    }
}
