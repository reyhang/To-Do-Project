import { applyMiddleware, compose, createStore } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware"
import { persistReducer } from "redux-persist";
import {rootReducer} from "./reducer"

const middleware = [promise,thunk];


const persistConfig = {
    key:"FirstProject",
    storage:AsyncStorage,

}

const persReducer = persistReducer(persistConfig,rootReducer);

const store = createStore(
    persReducer,
    undefined,
    compose(applyMiddleware(...middleware)));



export default store;