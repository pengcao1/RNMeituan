import { combineReducers } from "redux";
import getInfoReducer from "./getInfoReducer"

export default const rootReducer = combineReducers({
    getInfo: getInfoReducer
})