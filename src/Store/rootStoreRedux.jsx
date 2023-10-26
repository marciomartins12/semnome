import { combineReducers } from "redux";
import usuarioReducer from "./Reducer/usuarioReducer";

const rootStoreRedux = combineReducers({usuarioReducer});
export default rootStoreRedux;