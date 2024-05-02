import {INCREMENT, MAX_VALUE, RESET, START_VALUE} from "../actions/actions";

type InitialType = {
    num: number
    max: number,
    start: number
}

const initialState: InitialType = {
    num: 0,
    max: 0,
    start: 0
}

export const counterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case INCREMENT: {
            return {...state, num: state.num + 1}
        }
        case MAX_VALUE: {
            return {...state, max: action.payload}
        }
        case START_VALUE: {
            return {...state, num: action.payload, start: action.payload}
        }
        case RESET: {
            return {...state, num: 0}
        }
        default:
            return state
    }
}