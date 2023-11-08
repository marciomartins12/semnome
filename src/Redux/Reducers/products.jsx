const initialState = [{
    Produtos: "test",
}];

const Products = (state = initialState, action) =>{
    if(action.type == "test"){
        state.Products = "testetestinho"
    }

}

export default Products;