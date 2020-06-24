import React, { useState } from 'react';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

function App() {
  const [data, setData] = useState('');
  const test = () => {
    console.log('hello');
  };

  const onChange = (e) => {
    console.log('change!', e.target.value);
    setData(e.target.value);
  };
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
      <input onChange={onChange} value={data} />
      <input onChange={test} />
    </div>
  );
}

export default App;
