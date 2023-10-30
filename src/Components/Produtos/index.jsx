import Style from "./estiloProdutos.module.css";
import {MdOpenInNew} from "react-icons/md"
const Produtos = ({nome, subtitulo, preco, descricao, imagem, validador, classe, id})=>{
    let contador = 0;
    return (
<li className={Style.item}> 
<MdOpenInNew className={Style.iconAbrir}/>
    <img src={imagem} alt={`foto do ${nome}`} />
    <h3>{nome}</h3>
    <h4>{subtitulo}</h4>
    <div>
        <span>{preco}</span>
        <button>-</button>
        {contador}
        <button>+</button>
    </div>
</li>

    )
};
export default Produtos