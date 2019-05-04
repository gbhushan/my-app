import {ActionTypes} from '../actions/counterActions/';

export default function counter(state=0, action) {
  switch (action.type) {
    case ActionTypes.INCREMENT:
    console.log(`before increment state: ${state}`);
      return state + 1;
    case ActionTypes.DECREMENT:
    console.log(`state value: ${state}`);
      return state - 1;
    default:
      return state;
  }
}