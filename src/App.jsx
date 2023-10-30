import './App.css'
import Produtos from './Components/Produtos'

function App() {
    const {Items} = useSelector(state => state.Products);

 return(
    <main>
        <h1>Estação<span>Suplemento</span></h1>
        {Items.map((item)=>{
            return <Produtos
                nome = {item.nome}
                subtitulo = {item.subtitulo}
                preco = {item.preco}
                descricao = {item.descricao}
                imagem = {item.img}
                id = {item.id}
                validador = {item.confirmacao}
                classe = {item.classe}
            />
        })
    }    </main>
  )
}

export default App
