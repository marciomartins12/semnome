import { combineReducers } from "redux";
import { createStore } from "redux";
import Products from "./Reducers/ProductReducer";
const RootReducers = combineReducers({Products});
const Store = createStore(RootReducers);
export default Store;