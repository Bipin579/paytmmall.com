import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import {reducer as adminReducer} from "./Admin/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({adminReducer});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));