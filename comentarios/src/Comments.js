import React , { Component } from 'react'

class Comments extends Component {
    render(){
        return(
        <div>
          {/*Comment*/}
          {/* mapeia o vetor como um laço for, armazena em c o conteudo de cada posição, renderiza uma div com o conteúdo encontrado*/}
          { this.props.comment.map( c => {
            return <div>{c}</div> 
          })}
        </div>
        )
    }
}

export default Comments;