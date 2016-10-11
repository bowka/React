import * as ActionTypes from '../constants/actionTypes';
import moment from 'moment';

const initialState = { 
  time : 0,
  displayed_cities:[]
}

export default (state = initialState, action ) => {
  switch (action.type) {
    case ActionTypes.DEL :
      return { 
        ...state,
        displayed_cities:[...state.displayed_cities].filter((x,ix) =>  action.data.ix != ix)
      };

    case ActionTypes.ADD :
      return { 
        ...state,
        displayed_cities:[
        ...state.displayed_cities, action.data]
      };

    case ActionTypes.TIC:

      return { 
        ...state,
        time : new moment()
      };

    default:
      return state;
  }
};
