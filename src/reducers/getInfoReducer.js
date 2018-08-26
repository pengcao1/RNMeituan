

import { createStore, applyMiddleware } from "redux";
import { FETCH_GETS } from "../actions/types"

const initialState = {};

export function getInfoReducer(state = initialState, action) {
    console.log("getInfoReducer divi 1... action ", action);
    switch (action.type) {
        case FETCH_GETS:
            return {
                ...state,
                payload: action.payload
            }
        default:
            return {
                ...state
            }
    }
}