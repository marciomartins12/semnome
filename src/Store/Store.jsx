import { combineReducers } from "redux";
import { createStore } from "redux";
import Products from "./Reducers/ProductReducer";

const Store = createStore(RootReducers);
const RootReducers = combineReducers({Products})