import { createStore } from "redux";

import rootStoreRedux from "./rootStoreRedux"
const Store = createStore(rootStoreRedux);
export default Store;