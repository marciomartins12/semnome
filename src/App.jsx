import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();
  const { teste, testesepodemaisdeum } = useSelector(state => state.usuarioReducer);
  console.log(teste, testesepodemaisdeum);
  
  const handclickbotao = () => {
    dispatch({
      type: "teste/testinho",
    })
    console.log(teste, testesepodemaisdeum);

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
      <h3>{testesepodemaisdeum}</h3>
      <button onClick={handclickbotao}> clickme</button>

    </>
  )
}

export default App
