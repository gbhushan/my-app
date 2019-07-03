import { delay, put, takeLatest } from "redux-saga/effects";
import {ActionTypes} from '../actions/counterActions/';
import {IMAGE_ACTION_TYPES, onSuccess} from '../actions/imageActions/';

export function* helloSaga() {
  console.log('hello Saga');
  yield takeLatest(ActionTypes.INCREMENT, increment);
  yield takeLatest(ActionTypes.DECREMENT, decrement);

  yield takeLatest(IMAGE_ACTION_TYPES.FETCH_IMAGES_START, fetchImages);
  yield takeLatest(IMAGE_ACTION_TYPES.FETCH_IMAGES_SUCCESS, onSuccess);
}

export function* increment() {
  yield delay(1000);
  console.log('is it incrementing or not');
}
export function* decrement() {
  yield delay(1000);
  console.log('is it decrementing or not');
}

export function* fetchImages() {
  try {
    yield delay(1000);
    console.log('waited long enough');
    yield put(onSuccess("successful"));
  } catch(e) {
    console.log(e);
  }
}