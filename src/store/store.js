import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
    FETCH_GETS
} from "../actions/types";
const initialState={};
const middleware = [thunk];

export const store = createStore(getInfoReducer, initialState, applyMiddleware(...middleware));

function getInfoReducer(state = initialState, action) {
    console.log("getInfoReducer1... action ", action);
    console.log(" state ,",state);
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