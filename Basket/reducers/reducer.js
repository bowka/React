import * as ActionTypes from '../constants/actionTypes';
const initialState={
	content: {
	  'milk':2,
	  'bread':3
	},
	value: 'milk'
}
export default (state = initialState , action) => {
	switch (action.type){
		case ActionTypes.DEC:
			if (state.value!==''){ 
				var decVal=state.content[state.value]-1
				var decItem= state.value;
				var rest = state.content
				if (state.value in state.content){
					if (state.content[state.value]>1 ){ 
						
						return {...state,content:{...rest,[decItem]: decVal}}	
					}
					else {  
						var result = {...state}
						delete result.content[decItem]
						return result;
					}
				}
				return state
			}
			else return state;
	
		case ActionTypes.INC:
			if (state.value!==''){ 
				var IncVal=state.content[state.value]+1
				var newItem= state.value;
				var rest = state.content
				if (newItem in state.content){
					if (state.content[newItem]>0 ){ 
						return {...state,content:{...rest,[newItem]: IncVal}}	
					}
				}
				var result = {...state}
				result.content[newItem]=1
				return  result;
			}
			else return state;

		case ActionTypes.SETVALUE:
			return {...state, value:action.payload};

		default :
			return state;
	}
};       
