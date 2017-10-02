import * as ActionTypes from './ActionTypes.js';

export default (state = {value :[{pv: 0}]}, action) => {
  const {caption, value} = action;

  switch (action.type) {
    case ActionTypes.REFRESHDATA:
      const newState = Object.assign({}, state);
      let newValue = 0;
      if (newState["value"].length >= 1) {
      	newValue = value;
      }
      newState["value"].push({pv: newValue});
      return newState;
    default:
      return state
  }
}
