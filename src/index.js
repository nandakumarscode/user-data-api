import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import userReducer from './reducer';
import sagaUser from './userSaga';
import createSagaMiddleware from 'redux-saga';

const reducerRoot = combineReducers({userReducer});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducerRoot, applyMiddleware(sagaMiddleware));
const root = ReactDOM.createRoot(document.getElementById('root'));
sagaMiddleware.run(sagaUser);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
