import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { counterSaga } from './counter';
import todos from './todos';
import posts from './posts';

const rootReducer = combineReducers({ counter, todos, posts });

export function* rootSaga() {
  //! 배열 안의 여러 사가를 동시에 실행시켜준다.
  console.log('root 사가');

  yield all([counterSaga()]);
}

export default rootReducer;
