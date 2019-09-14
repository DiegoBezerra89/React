import React, { useState, useEffect } from 'react'

//arrow-function || utilizar letras maiúsculas para determinar ao React o que são componentes
const MostraVoltas = (props) => { //props neste caso, recebe todas as propriedades passadas no JSX, neste caso voltas='15' 
  return (
    <p>{props.voltas}<br/>
      voltas
    </p>
  )  
}

const TempoMedio = (props) => {
  return (
    <p>
      {props.tempo}<br/>
      Tempo médio por volta
    </p>
  )
}

//Componente reaproveitável
const Button = (props) => <button onClick={props.onClick}> {props.text} </button> //não precisa de {} se a fucção tiver apenas uma linha


function App() {
  const [numVoltas, setNumVoltas] = useState(10)
  const [running, setRunning] = useState(false) //se o programa está rodando ou não, toda vez q o running for setado, o useEffect vai responder criando o intervalo de 1000ms
  const[tempo, setTempo] =  useState(0)

  useEffect(() => { //possibilita uma chamada de função num determinado tempo
    let timer = null
      if(running){
        timer = setInterval(() => {
          setTempo(old => old + 1)
      }, 1000 )
    }
    return () => {
      if(timer) {
        clearInterval(timer)
      }
    }
  }, [running]) //os colchetes vazios determinam que o useEffect não tem dependências, ele só é chamado uma única vez, caso contrário ele seria chamado todas as vezes que o useState fosse ativado
  //running é dependencia do useEffect, sempre que for mudado de estado false->true true->false ele executa o useEffect

  const toggleRunning = () => {
    setRunning(!running) //se for falso, vira verdadeiro e se for verdadeiro vira falso 
  }


  const increment = () => {
    setNumVoltas(numVoltas + 1)
  }
  const decrement = () => {
    setNumVoltas(numVoltas - 1)
  }

  

  return (
    <div className='App'> 
      <MostraVoltas voltas={numVoltas} /> {/* possível passar valores ao componente via props, voltas='15'*/}     
      <Button text='+' onClick={increment} /> 
      <Button text='-' onClick={decrement} />
      <TempoMedio tempo={tempo} />
      <Button text='Iniciar' onClick={toggleRunning} />
      <Button text='Reiniciar' />
    </div>
  )
}

export default App
