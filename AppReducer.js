import { AsyncStorage } from "react-native";
import { Action, combineReducers, Reducer } from "redux";
import { persistReducer } from "redux-persist";
import { createFilter } from "redux-persist-transform-filter";

export const AppReducer = persistReducer(
    {
        key:"persist",
        storage:AsyncStorage,
        transforms:[
            createFilter("home","fetch"),
        ],
        whitelist:["hoem","ILike"],
    }
);