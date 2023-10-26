import { combineReducers } from "redux";
import userReducer from "./reducer/reducer";

const rootReducers = combineReducers({userReducer});

export default rootReducers;