import React from 'react'

//Componente reaproveitável
const Button = (props) => <button {...props}> {props.text} </button> //não precisa de {} se a fucção tiver apenas uma linha

export default Button