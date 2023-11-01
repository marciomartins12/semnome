import { useSelector } from 'react-redux';
import Produtos from '../../Components/Produtos';
import Style from "./PaginaInicialProdutos.module.css";
import Carousel from '../../Components/Carousel';

function App() {
    const {Items} = useSelector(state => state.Products);

 return(
    <main>
        <h1 className={Style.NomedaLoja}>Estação<span>Suplemento</span></h1>

        <Carousel/>

        <ul className={Style.listaDeProdutos}>
            {Items.map((item)=>{
                    return <Produtos
                    key={item.id}
                    nome = {item.nome}
                    subtitulo = {item.subtitulo}
                    preco = {item.preco}
                    descricao = {item.descricao}
                    imagem = {item.img}
                    validador = {item.confirmacao}
                    classe = {item.classe}
                    id = {item.id}
                    />
                    }) 
            }
        </ul>
        <button>Carrinho de Compras</button>
       </main>
  )
}

export default App
