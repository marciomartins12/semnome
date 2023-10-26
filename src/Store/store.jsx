import { createStore } from "redux";

import rootStoreRedux from "./rootStoreRedux";
//store responsavel por armazenar tudo.
//ostore que vai ser responsavel pelo root que é a raiz de onde vai sair todos os reducers
const Store = createStore(rootStoreRedux);
export default Store;