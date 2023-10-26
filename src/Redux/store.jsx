import { createStore } from "redux";
import rootReducers from "./root-redux";

const Store = createStore(rootReducers);

export default Store