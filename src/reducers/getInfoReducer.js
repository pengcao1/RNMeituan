import { FETCH_GETS } from "../actions/types";

const initalState = {
    getinfo:[]
}
export default function(state = initalState, action) {
    console.log("getInfoReducer111... action ",action.type, state);
    switch(action.type){
        case FETCH_GETS:
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}