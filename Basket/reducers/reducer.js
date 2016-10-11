import * as ActionTypes from '../constants/actionTypes';
const initialState = {
	butter: 3,
	milk: 2
}
export default (state = initialState , action) => {
	var item = action.data;
	switch (action.type){
		case ActionTypes.DEC:			
			if (state.item > 1) {
				return {...state, [item]: state.item - 1};
			}
			return state.filter((key) => key!=action.data);

		case ActionTypes.INC:
			if (state.item>0) {
				return {...state, [item]: state.item + 1};
			}
			return {...state, [item]:1} ;

		default :
			return state;
	}
};
