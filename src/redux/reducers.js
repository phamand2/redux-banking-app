import {ACTION_INCREMENT, ACTION_DECREMENT} from './actions'


const defaultState = {
  checking: 100,
  savings: 100
};





export function accountReducer(state = defaultState, action) {

  switch(action.type) {
    case ACTION_INCREMENT:
      return {
        ...state,
        [action.payload.account]: state[action.payload.account] + action.payload.amount
      }
    case ACTION_DECREMENT:
      return {
        ...state,
        [action.payload.account]: state[action.payload.account] - action.payload.amount
      }
      default:
        return state;
    }
  }