import React, { useState, useEffect } from 'react'
//importando módulos externos de componentes
import MostraVoltas from './MostraVoltas.js'
import MostraTempo from './MostraTempo.js'
import Button from './Button.js'
import './styles.css'

function App() {
  const [numVoltas, setNumVoltas] = useState(0)
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
    if(numVoltas > 0)
    setNumVoltas(numVoltas - 1)
  }

  const reset = () => {
    setNumVoltas(0)
    setTempo(0)
  }

  return (
    <div className='App'> 
      <MostraVoltas voltas={numVoltas} /> {/* possível passar valores ao componente via props, voltas='15'*/}     
      <Button text='+' className="bigger" onClick={increment} /> 
      <Button text='-' className="bigger" onClick={decrement} />
      {
        numVoltas > 0 && //Em jsx este elemento só será mostrado na tela se esta condição for verdadeira 
      <MostraTempo tempo={Math.round(tempo / numVoltas)} /> //saber quanto é a média de tempo
      }
      <Button text={running ? 'Pausar' : 'Iniciar'} onClick={toggleRunning} />
      <Button onClick={reset} text='Reiniciar' />
    </div>
  )
}

export default App

