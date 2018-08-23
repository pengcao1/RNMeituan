import { combineReducers } from "redux";
import fetchInfos from "./fetchInfos"
import visibilityFilter form "./visibilityFilter"


export default combineReducers({
    fetchInfos,
    visibilityFilter
})