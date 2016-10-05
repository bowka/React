import React, { Component, PropTypes } from 'react'

class Calculator extends Component{ 
  callAddNum(ix){ 
  return ()=>this.props.addDigit(ix.toString())
}
  render(){ 
    const {myState,onPlus,onEqual,addDigit,onDel,onMultiply,onDiv,onMinus}=this.props;
    var numbers = [...Array(10).keys()];
    var numButtorns = [];
    numbers.forEach((ix)=> numButtorns.push(<button key={ix} onClick={this.callAddNum(ix)}> {ix} </button>))
    return(
      <div>

      {myState.first_operand}{' '}{myState.operator}{' '}{myState.second_operand}{' = '} {myState.result}
        <br/>{numButtorns}<br/>
        <button onClick={()=>onPlus()}>+</button>
        <button onClick={()=>onMinus()}>-</button>
        <button onClick={()=>onMultiply()}>*</button>
        <button onClick={()=>onDiv()}>/</button>
        <br/>
        <button onClick={()=>onEqual()}>=</button>
        <br/>
        <button onClick={()=>onDel()}>DEL</button>
            
      
      </div>
      )
  }
}
Calculator.PropTypes={ 
    myState:  PropTypes.object.isRequired,
    addDigit: PropTypes.func.isRequired,
    onPlus:   PropTypes.func.isRequired,
    onEqual:  PropTypes.func.isRequired,
    onDel:    PropTypes.func.isRequired,
    onDiv:    PropTypes.func.isRequired,
    onMinus:  PropTypes.func.isRequired,
    onMultiply:PropTypes.func.isRequired
  }

export default Calculator
