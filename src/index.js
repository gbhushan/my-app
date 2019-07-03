import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

import {Provider} from 'react-redux';

import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
// import saga
import {helloSaga} from './sagas/saga';

// import reducer
import {counter, imagesManager} from './reducers/reducers';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({counter, imagesManager}),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(helloSaga);

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
