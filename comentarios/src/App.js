import React, {Component} from 'react';
import Comments from './Comments';
import Comment from './Comment';

class App extends Component {
  state = {
    newComment : '',
    comment: [
      'Comment 1',
      'Comment 2',
      'Comment 3',
      'Comment 4'
    ]
  }
  sendComment = () => {
    this.setState({
      //comment: ['comment 1', 'comment 2', 'comment 3', 'comment 4', 'comentario novo] Cria um array e push o ultimo comentario
      comment: [...this.state.comment, this.state.newComment], //spread operator, faz com q todas as posições do array sejam referenciadas.
      newComment: ''
    })
  }
  handleChange = event => {
    this.setState({
      newComment: event.target.value
    })
  } 
  render() {
    return(
      <div>
        {/*Comments*/}
        <Comments comment={this.state.comment}/>
      </div>
    );
  }
}

export default App;
