import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, increaseAsync, decrease, setDiff, decreaseAsync } from '../modules/counter';

function CounterContainer() {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook이다.
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일하다.
  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff
  }));

  // useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게 해주는 Hook이다.
  const dispatch = useDispatch();
  const onIncrease = () => {
    console.log('increase dispatch 전!!!');

    return dispatch(increaseAsync());
    // return dispatch(increase());
    // return dispatch({ type: 'test' });
  };
  // const onDecrease = () => dispatch(decrease());
  const onDecrease = () => dispatch(decreaseAsync());

  const onSetDiff = (diff) => dispatch(setDiff(diff));

  // 각 액션을 디스패치

  return <Counter number={number} diff={diff} onIncrease={onIncrease} onDecrease={onDecrease} onSetDiff={onSetDiff} />;
}

export default CounterContainer;
