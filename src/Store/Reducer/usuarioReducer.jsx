const initialState={
    teste:"teste testinho testão",
};
const usuarioReducer = (state=initialState, action)=>{
    if(action.type==="teste/testinho"){
        return{...state, teste:"testinhofeitocomsucesso"}
    }
    return state;
}
export default usuarioReducer;