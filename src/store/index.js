import { createStore } from "redux";
import { persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
//import rootReducer from 

const persistConfig = {
    key: "root",
    storage: sto
}