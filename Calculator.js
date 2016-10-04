import React, {Component} from 'react';

class Calculator extends Component{
 constructor(){
  super();
  this.state={ 
    first_operand : null,
    second_operand : null,
    operator : null,
    result :null
   }
  }
  add_digit(digit){
    if (this.state.operator===null) this.add_digit_to_first_operand(digit);
    else  this.add_digit_to_second_operand(digit);
  }
  add_digit_to_first_operand(digit){
    this.state.first_operand === null ? this.setState({first_operand:digit}) : 
      this.setState({first_operand:this.state.first_operand+digit})
  }
  add_digit_to_second_operand(digit){
    this.state.second_operand === null &&  this.state.operator!=null && this.state.first_operand!=null?  
      this.setState({second_operand:digit}) : this.setState({second_operand: this.state.second_operand+digit})
  }
  add_operator(act){
     if (this.state.first_operand != null) {this.setState({operator:act})}
  }
  solve(){
    //pressed rownum button
    if (this.state.first_operand===null || this.state.second_operand===null || this.state.operator===null){
      this.clear();
    }
    else{
      if (this.state.operator==='*'){ this.setState({result: parseInt(this.state.first_operand,10) * parseInt(this.state.second_operand,10)});}
      if (this.state.operator==='/'){ this.setState({result: parseInt(this.state.first_operand,10) / parseInt(this.state.second_operand,10)});}
      if (this.state.operator==='+'){ this.setState({result: parseInt(this.state.first_operand,10) + parseInt(this.state.second_operand,10)});}
      if (this.state.operator==='-'){ this.setState({result: parseInt(this.state.first_operand,10) - parseInt(this.state.second_operand,10)});}
    } 
  }

  clear(){ 
    this.setState({first_operand:null});
    this.setState({second_operand:null});
    this.setState({operator:null});
    this.setState({result:null});
  }

  render() {
    return( 
      <div>
        <h1>React Calculator </h1>
        <p id='display'>{this.state.first_operand===null? ' operand ':this.state.first_operand} 
        {this.state.operator===null? ' operator ':this.state.operator} 
        {this.state.second_operand===null? ' operand ':this.state.second_operand} 
        {this.state.result===null? ' result ': '='+this.state.result}</p>
        <Numbers add_digit={this.add_digit.bind(this)} /> 
        <Operators add_operator={this.add_operator.bind(this)} />
        <Rownum solve={this.solve.bind(this)} />
        <button onClick={this.clear.bind(this)}> CE </button>
      </div>)
  }
}  

const Numbers= (props)=>(
  <div>
      {[...Array(10).keys()].map((ix)=> 
        <button key={ix} onClick={()=>
          props.add_digit(ix.toString())}>
          {ix}
        </button>
        )}
  </div>
  );

const Operators=(props)=>(
  <div>
    {['+','-','*','/'].map((ix)=> 
        <button key={ix} onClick={()=>
          props.add_operator(ix)}>
          {ix}
        </button>
        )}
  </div>
  );

const Rownum = (props)=>(
  <div>
   <button key={'='} onClick={ ()=>props.solve()}>=</button>
  </div>
  );

export default Calculator
