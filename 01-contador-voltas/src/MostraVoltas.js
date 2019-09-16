import React from 'react'


const MostraVoltas = (props) => { //props neste caso, recebe todas as propriedades passadas no JSX, neste caso voltas='15' 
    return (
        <p className="voltas">
        <span>{props.voltas}</span><br/>
        voltas
        </p>
    )  
}

export default MostraVoltas 