import React from 'react'

const MostraVoltas = () => { //arrow-function
  return (
    <p>10<br/>
      voltas
    </p>
  )  
}

const ButtonPlus = () => {
  return (
    <button>+</button>
  )
}

const ButtonSubtract = () => {
  return (
    <button>-</button>
  )
}

const TempoMedio = () => {
  return (
    <p>
      1:30<br/>
      Tempo médio por volta
    </p>
  )
}

const ButtonInit = () => {
  return (
    <button>Iniciar</button>
  )
}

const ButtonReinit = () => {
  return (
    <button>Reiniciar</button>
  )
}


function App() {
  return (
    <div className='App'> 
      <MostraVoltas />     
      <ButtonPlus /> 
      <ButtonSubtract />
      <TempoMedio />
      <ButtonInit />
      <ButtonReinit />
    </div>
  )
}

export default App
