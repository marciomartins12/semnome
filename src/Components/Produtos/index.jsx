import { useSelector } from "react-redux";
import Style from "./estiloProdutos.module.css";
const Produtos = ({nome, img, preco, texto, icone})=>{
    
   
    return (
<section>
    {produtos.map((item)=>{
        <div>
        {item.nome}

        </div>
    })}

</section>

    )
};
export default Produtos