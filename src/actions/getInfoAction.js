import {
    FETCH_GETS
} from "./types";
import * as API from "../../src/API/api"

export function fetchInfos() {
    return function(dispatch) {
        fetch(API.GET_DISCOUNT)
            .then(res => {
                return res.json();
            })
            .then(info => {
                dispatch({
                    type: FETCH_GETS,
                    payload: info.data
                })
            })
    }
}