import { createLogger }                             from "redux-logger";
import { composeWithDevTools }                      from "remote-redux-devtools";
import { applyMiddleware, createStore, Middleware } from "redux";
import {AppReducer}                                 from "./AppReducer";


const logger = createLogger({
        collapsable: true,
        predicate: () => process.env.NODE_ENV === "development",
    }
);

const middlewares: Middleware[] =[
    logger,
];

export const configureStore =(preloadState:any) =>{
    return composeWithDevTools(applyMiddleware(...middlewares))(createStore)(AppReducer,preloadState);
};