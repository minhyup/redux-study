import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
import PostListContainer from './containers/PostListContainer';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';

function App() {
  const [data, setData] = useState('');
  const test = () => {
    console.log('hello');
  };

  const onChange = (e) => {
    console.log('change!', e.target.value);
    setData(e.target.value);
  };

  const promise = () => {
    return new Promise((resolve, reject) => {
      console.log('프로미스!');
      setTimeout(() => {
        resolve(2);
      }, 2000);
      // resolve(1);
      console.log('여긴?');
    });
  };

  const test2 = () => {
    promise().then(() => {
      console.log('끝났어요');
    });
  };

  const sleep = (ms) => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  };

  const awaitTest = async () => {
    console.log('async request');
    // await sleep(2000);
    const response = await promise();
    console.log('async response:::', response);
  };

  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
      <input onChange={onChange} value={data} />
      <input onChange={test} />
      <button onClick={test2}>프로미스테스트</button>
      <button onClick={awaitTest}>await 테스트</button>
      <br />
      <hr />
      <PostListContainer />
      <br />
      <hr />
      <Route path="/" component={PostListPage} />
      <Route path="/:id" component={PostPage} />
    </div>
  );
}

export default App;
