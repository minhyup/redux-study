// 기본 라이브러리
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

// 내부 모듈
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './modules';
import myLogger from './middleware/myLogger';

// import './exercise';
// const store = createStore(rootReducer, applyMiddleware(myLogger), composeWithDevTools());
// const store = createStore(rootReducer, setStoreOptions());
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(myLogger, logger)));
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
