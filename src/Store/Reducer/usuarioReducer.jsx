const initialState={
   nome: null, contador: 0
};
const usuarioReducer = (state = initialState, action)=>{
    if(action.type==="teste/testinho"){
        return {...state, nome: action.payload}
    }
    if(action.type == "remove/tudo"){
        return {...state, nome: "contando", contador: state.contador + 1}
    }
    if(action.type == "limpar/li"){
        return {...state, nome: "limpo", contador: 0}
    }
    return state;
}
export default usuarioReducer;