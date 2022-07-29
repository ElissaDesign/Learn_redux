import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import isLoggedReducer from "./isLogged";

const allReducers = combineReducers({
    myCount: counterReducer,
    isLogged: isLoggedReducer
})
export default allReducers;