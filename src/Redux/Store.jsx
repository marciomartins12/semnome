import { combineReducers } from "redux";
import { createStore } from "redux";
import Products from "./Reducers/products";
const rootreducers = combineReducers({Products})
const Store = createStore(rootreducers)