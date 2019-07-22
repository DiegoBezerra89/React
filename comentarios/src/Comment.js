import React, { Component } from 'react';


class Comment extends Component {
    render() {
        <div>
        {/* new comment */}
        <textarea value={this.state.newComment} onChange={this.handleChange}></textarea>
        {/* Enviar chama a arrow function toda a vez que for clicado*/}
        <button onClick={this.sendComment}>Enviar</button> 
      </div>
    }
}

export default Comment;