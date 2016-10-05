var defState= {first_operand:'',second_operand:'',operator:'',result:''};

export default (state=defState,action)=>{ 
  var newState={...state};
  switch (action.type){ 
    case 'ADDNUM':
      
      if ( state.operator === '') {         
        newState.first_operand += action.data;
      }
      else{
        newState.second_operand += action.data;
      }
      return newState;
    case 'SOLVE':
      if (state.operator === '+') {
        newState.result = parseInt(state.first_operand,10) + parseInt(state.second_operand,10);
      }
      if (state.operator === '-') {
        newState.result = parseInt(state.first_operand,10) - parseInt(state.second_operand,10);
      }
      if (state.operator === '*') {
        newState.result = parseInt(state.first_operand,10) * parseInt(state.second_operand,10);
      }
      if (state.operator === '/') {
        newState.result = parseInt(state.first_operand,10) / parseInt(state.second_operand,10);
      }

      if(state.second_operand===''){
         return defState;
      }
      return newState;
    case 'PLUS':
      newState.operator='+';
      return newState;

    case 'MINUS':
      newState.operator='-';
      return newState;
    
    case 'DIV':
      newState.operator='/';
      return newState;

    case 'MULT':
      newState.operator='*';
      return newState;
    case 'DEL':
      return defState;

    default:
      return state;
  
  }
}
