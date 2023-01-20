import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {reducer as AdminReducer} from "./Admin/reducer";
import { reducer as AppReducer } from "./App/reducer";
import { reducer as AuthReducer } from "./Auth/reducer";


const rootReducer = combineReducers({AdminReducer, AppReducer, AuthReducer});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));





