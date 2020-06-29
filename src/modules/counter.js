import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

// 액션타입 만들기
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

// 액션 생성함수만들기( 향후... dispatch의 파라미터로 넣어서 액션을 발생시킨다.)
export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//! redux-thunk
// export const increaseAsync = () => {
//   return (dispatch, getState) => {
//     console.log('thunk state:::', getState);
//     setTimeout(() => {
//       console.log('setTimeOut 2초');

//       dispatch(increase());
//     }, 2000);
//   };
// };

//! redux-saga
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

//! redux-saga function definition
function* increaseSaga() {
  console.log('increase 발생');
  yield delay(1000);
  console.log('increase 딜레이 완료');
  // put 을 통하여 dispatch 가능
  yield put(increase());
  console.log('increase 디스패치 완료');
}

function* decreaseSaga() {
  yield delay(1000);
  // put 을 통하여 dispatch 가능
  yield put(decrease());
}

export function* counterSaga() {
  console.log('1');
  yield takeEvery(INCREASE_ASYNC, increaseSaga); // 모든 increase_async 액션 처리
  console.log('2');
  yield takeLatest(DECREASE_ASYNC, decreaseSaga); // 마지막으로 디스패치된 액션만 실행
  console.log('3');
}

// 초기상태 선언
const initialState = {
  number: 0,
  diff: 1
};

// 리듀서 선언
function counter(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff
      };
    case INCREASE:
      console.log('여기는 리듀서 increase!!!');
      return {
        ...state,
        number: state.number + state.diff
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff
      };
    default:
      return state;
  }
}

export default counter;
