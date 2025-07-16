import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function BotonGenerar(){
  return (
<button id='botonGenerarPsw'>Generar</button>
);



}

function BotonCopiar(){
return (



<button id='botonCopiar'>Copiar</button>




);
}

function App() {
 

  return (
    <>
      <div id='wrapper' className=''>
        <h1>Password Generator!</h1>
        <br />
        <input type="text" id='generada' disabled/>
        <br />
        <BotonGenerar />
        <BotonCopiar />
        
        
        
      </div>
    </>
  )
}

export default App
