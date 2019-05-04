import { delay, takeLatest } from "redux-saga/effects";
import {ActionTypes} from '../actions/counterActions/';

export function* helloSaga() {
  console.log('hello Saga');
  yield takeLatest(ActionTypes.INCREMENT, increment);
  yield takeLatest(ActionTypes.DECREMENT, decrement);
}

export function* increment() {
  yield delay(1000);
  console.log('is it incrementing or not');
}
export function* decrement() {
  yield delay(1000);
  console.log('is it decrementing or not');
}