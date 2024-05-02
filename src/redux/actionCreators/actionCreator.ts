import {INCREMENT, MAX_VALUE, RESET, START_VALUE} from "../actions/actions";

export const incrementAC = () => {
    return {
        type: INCREMENT,
    }
}

export const resetAC = () => {
    return {
        type: RESET,
    }
}

export const maxValueAC = (num: number) => {
    return{
        type: MAX_VALUE,
        payload: num
    }
}

export const startValueAC = (num: number) => {
    return{
        type: START_VALUE,
        payload: num
    }
}