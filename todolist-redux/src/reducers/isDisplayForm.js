import * as types from './../constant/ActionTypes';

var initialState = false;
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_FORM:
      return !state
    case types.CLOSE_FORM:
      return {
        state: false
      }
    default: return state
  }
}

export default myReducer;