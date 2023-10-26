import { combineReducers } from "redux";
import usuarioReducer from "./Reducer/usuarioReducer";

//o root vai ser responsavel pra mostrar o reducer
//o que entrar nesse combinereducers são exxatamente os reducer com seus states que podem ser acessados
const rootStoreRedux = combineReducers({usuarioReducer});

export default rootStoreRedux;