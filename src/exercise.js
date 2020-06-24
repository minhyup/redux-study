import { createStore } from 'redux';

console.log('hello redux !!');

// 상태정의
const initialState = {
  counter: 0,
  text: '',
  list: []
};

// 액션타입정의
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// 액션 생성함수정의
export const increase = () => {
  return {
    type: INCREASE
  };
};

export const decrease = () => {
  return {
    type: DECREASE
  };
};

export const changeText = (text) => {
  return {
    type: CHANGE_TEXT,
    text
  };
};

export const addToList = (item) => {
  return {
    type: ADD_TO_LIST,
    item
  };
};

// ! not arrow function
// export function increase() {
//   return {
//     type: INCREASE
//   };
// }
// export function decrease() {
//   return {
//     type: DECREASE
//   };
// }
// export function changeText(text) {
//   return {
//     type: CHANGE_TEXT,
//     text
//   };
// }
// export function addToList(item) {
//   return {
//     type: ADD_TO_LIST,
//     item
//   };
// }

// // 상태정의
// const initialState = {
//   counter: 0,
//   text: '',
//   list: []
// };

// reducer
//! 새로운 상태를 반환해줘야한다.
//! 불변성을 지켜줘야한다.\
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter + 1
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item)
      };
    default:
      return state;
  }
}

// store 만들기
const store = createStore(reducer);

const listener = () => {
  console.log(store.getState());
};

const unsubscribe = store.subscribe(listener);

// dispatch
store.dispatch(increase());
unsubscribe();
