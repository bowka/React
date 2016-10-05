import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import Calculator from './components/Calculator'
import calculator from './reducers'


const store = createStore(calculator)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(

    <Calculator
        myState={store.getState()}
        addDigit={(digit)=>store.dispatch({type:'ADDNUM', data:digit})}
        onPlus={()=>store.dispatch({type:'PLUS'})}
        onEqual={()=> store.dispatch({type:'SOLVE'})}
        onDel={()=> store.dispatch({type:'DEL'})}
        onMinus={()=> store.dispatch({type:'MINUS'})}
        onDiv={()=> store.dispatch({type:'DIV'})}
        onMultiply={()=> store.dispatch({type:'MULT'})}
    />,
    rootEl
    )
render()
store.subscribe(render)


