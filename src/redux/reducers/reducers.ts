import {INCREMENT, MAX_VALUE, RESET} from "../actions/actions";

type InitialType = {
    num: number
}

const initialState: InitialType = {
    num: 0
}

export const counterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case INCREMENT: {
            return {...state, num: state.num + 1}
        }
        case MAX_VALUE: {
            return {...state, num: action.payload}
        }
        case RESET: {
            return {...state, num: 0}
        }
        default:
            return state
    }
}