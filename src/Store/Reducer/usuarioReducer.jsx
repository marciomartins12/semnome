const initialState={
   nome: null, sobrenome: null
};
const usuarioReducer = (state = initialState, action)=>{
    if(action.type==="teste/testinho"){
        return{...state, nome: action.nome, sobrenome: action.sobrenome}
    }
    if(action.type == "remove/tudo"){
        return{...state, nome: null, sobrenome: null}
    }

    return state;
}
export default usuarioReducer;