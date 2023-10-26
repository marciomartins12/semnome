const initialState={
    teste : "teste testinho testão",
    testesepodemaisdeum  : 0
};
const usuarioReducer = (state = initialState, action)=>{
    if(action.type==="teste/testinho"){
        return{...state, testesepodemaisdeum: 1}
    }

    return state;
}
export default usuarioReducer;