import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import {reducer as AdminReducer} from "./Admin/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({AdminReducer});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));