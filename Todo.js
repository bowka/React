import React, { Component } from 'react';

import ReactDOM from 'react-dom';
// je to ako v Jave ze v jednom subore moze byt iba jedna trieda?
// var items = ['buy a milk', 'do something else'];  
class List extends Component{    
  render(){
    return(
      <div>
        <ul>
          {this.props.items.map((value,ix) => 
              <li key={ix} onClick={()=>this.props.vymaz({ix})}>{value}</li>)}
        </ul>
      </div>
    );
  }
}

class Submit extends Component {

  render() {
    return (
      <div className="Submit">
        <form onSubmit={ev => {ev.preventDefault();}}>
          <input type="text" ref="newTodo"/>
          <button onClick={(newTodo)=>{
            var val = ReactDOM.findDOMNode(this.refs.newTodo).value;
            this.props.zapis(val)
          }}
          >Submit</button>
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
    this.state.items.push(noveTodo)
  }
  vymaz(stareTodo){
    delete this.state.items[stareTodo];
    // this.state.items.map(task=>{
      // if (stareTodo!=task){return task}
      // }
    // ) 
  }
  render() {
    return (
      <div>
       <Submit
          zapis={(newValue)=>{
            console.log(newValue);
            this.state.items.push(newValue);
            this.setState({items: this.state.items});
          }}
       />
       <List items={this.state.items} vymaz={(stareTodo)=>
        {this.state.items.splice(stareTodo,1);
          console.log(stareTodo);
        this.setState({items: this.state.items});
      }
      }/>
      </div>
    );
  }
}
 
export default Todo;

