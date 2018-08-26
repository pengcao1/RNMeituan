import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { getInfoReducer } from "../reducers/getInfoReducer"
const initialState={};
const middleware = [thunk];

export const store = createStore(getInfoReducer, initialState, applyMiddleware(...middleware));