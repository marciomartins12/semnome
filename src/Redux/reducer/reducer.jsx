const initialState = {
    teste : "teste testinho"
}
const userReducer = (state = initialState, action)=>{
 if(action.type === "teste/testinho"){
    return {...state, teste : 24}
 }
 return state;
}
export default userReducer;