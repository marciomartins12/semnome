import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { combineReducers } from "redux";
import usuarioReducer from "./Reducer/usuarioReducer";

//o root vai ser responsavel pra mostrar o reducer
//o que entrar nesse combinereducers são exxatamente os reducer com seus states que podem ser acessados
const rootStoreRedux = combineReducers({usuarioReducer});
//store responsavel por armazenar tudo.
//ostore que vai ser responsavel pelo root que é a raiz de onde vai sair todos os reducers
const Store = createStore(rootStoreRedux, applyMiddleware(logger));
export default Store;