import {combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer} from "./reducers/reducers";

let RootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(RootReducer)

export type RootReducerType = ReturnType<typeof RootReducer>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch