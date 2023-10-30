import { useSelector } from 'react-redux';
import './App.css'
import Produtos from './Components/Produtos'

function App() {
    const {Items} = useSelector(state => state.Products);

 return(
    <main>
        <h1>Estação<span>Suplemento</span></h1>
        <ul>
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
       </main>
  )
}

export default App
