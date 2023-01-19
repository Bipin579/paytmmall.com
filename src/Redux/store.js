import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { reducer as AppReducer } from "./App/reducer";


const rootReducer = combineReducers({AppReducer});



export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
