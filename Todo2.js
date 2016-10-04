import React, { Component } from 'react';

import ReactDOM from 'react-dom'; 

const List = (props)=> (
  <div>
    <ul>
      {props.items.map((value,ix) =>
          <li key={ix} onClick={()=>
            props.vymaz({ix})}>{value}
          </li>
      )}
    </ul>
  </div>
);

class Submit extends Component {

  render() {
    return (
      <div className="SubmitForm">
        <form onSubmit={ev => {
            ev.preventDefault();
            var val = ReactDOM.findDOMNode(this.refs.newTodo).value;
            this.props.zapis(val)
          }}>
          <input type="text" ref="newTodo"/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

class Todo extends Component {
  constructor(){
    super();
    this.state={items:["buy a milk", "do something else"]} 
  }

  zapis(noveTodo){
      this.setState({
        items: [...this.state.items, noveTodo]
      });
      // this.state.items.push(noveTodo);
      // this.setState({items: this.state.items});
  }

  vymaz(stareTodo) {
      this.state.items.splice(stareTodo,1);
      this.setState({items: this.state.items}); 
  }

  render() {
    return (
      <div>
      <Submit zapis={this.zapis.bind(this)} />
      <List items={this.state.items} vymaz={this.vymaz.bind(this)} /> 
      </div>
    );
  }
}

export default Todo;
