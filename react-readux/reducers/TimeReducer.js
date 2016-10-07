import * as ActionTypes from '../constants/actionTypes';
var moment = require('moment');

const initialState = { 
  time : moment().format('LTS'),
  displayed_cities:[]
}

export default (state = initialState, action ) => {
  switch (action.type) {
    case ActionTypes.DEL :
      return { 
        ...state,
        displayed_cities:[...state].filter((x) =>  action.data !== x)
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
        time : moment().format('LTS')
      };

    default:
      return state;
  }
};
