import { ActionTypes } from "../actions/counterActions/";
import { IMAGE_ACTION_TYPES } from "../actions/imageActions/";

export function counter(state = 0, action) {
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

export function imagesManager(state={}, action) {
  switch (action.type) {
    case IMAGE_ACTION_TYPES.FETCH_IMAGES_START:
      console.log("images are starting");
      break;
    case IMAGE_ACTION_TYPES.FETCH_IMAGES_SUCCESS:
      console.log("you are successful");
      break;
  }
  return state;
}
