// 액션타입선언
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// 액션 생성함수
let nextId = 1;
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text
  }
});
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, id });

// 초기상태 선언
const initialState = [];

// 리듀서 선언
function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      console.log('Todo!!!!!!!::', action.id);

      return state.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
    case 'test':
      console.log('Todos 리듀서에서 test action 이 발생하였습니다.');
      return state;
    default:
      return state;
  }
}

export default todos;
