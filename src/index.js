import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from "redux-saga";
import mainReducer from "./store/reducer/index";
import { BrowserRouter } from 'react-router-dom';
import rootSaga from "./sagas/watchers";
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinereducer = combineReducers(mainReducer);

const store = createStore(combinereducer,composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
