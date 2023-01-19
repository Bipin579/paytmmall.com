import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { reducer as AppReducer } from "./App/reducer";

<<<<<<< HEAD
const rootReducer = combineReducers({AppReducer});
=======

const rootReducer = combineReducers({});
>>>>>>> 4c02fd56be53520514bb5fa82d88885ed92e9fa9

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
