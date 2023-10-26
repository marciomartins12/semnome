import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();
  const { nome, sobrenome } = useSelector(state => state.usuarioReducer);
  console.log(nome, sobrenome);
  


  const clickbtn = () => {
    dispatch({
      type: "teste/testinho",
      payload : "aaaaaaaaaa", 
    })
  }


  const Remove = ()=>{
    dispatch({
      type: "remove/tudo",
    })
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Teste</h1>
      <h3>nome? = {nome}</h3>
      <h4>sobrenome? = {sobrenome}</h4>
      <button onClick={clickbtn}> clickme</button>
      <button onClick={Remove}> remove</button>

    </>
  )
}

export default App
