// 기본 라이브러리
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { createBrowserHistory } from 'history';

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

// history 선언
const customHistory = createBrowserHistory();

// 로거 사용시 맨 마지막으로~
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk.withExtraArgument({ history: customHistory }), logger)));
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter history={customHistory}> */}
    <BrowserRouter history={customHistory}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
