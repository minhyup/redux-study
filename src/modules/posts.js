import * as postsAPI from '../api/posts';
import { createPromiseThunk, reducerUtils, handleAsyncActions } from '../lib/asyncUtils';

// 액션타입
const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

// thunk 생성시 모든 액션들에 대해 생성함수를 만들어 줄필요는 없다.ㅇㅋ...
// thunk: 액션이 객체 형태가 아닌 함수형태...
// export const getPosts = () => {
//   return async (dispatch) => {
//     dispatch({ type: GET_POSTS });

//     try {
//       const posts = await postsAPI.getPosts();

//       dispatch({ type: GET_POSTS_SUCCESS, posts });
//     } catch (error) {
//       dispatch({ type: GET_POSTS_ERROR, error });
//     }
//   };
// };
//! refactoring
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);

// export const getPost = (id) => {
//   return async (dispatch) => {
//     dispatch({ type: GET_POST });

//     try {
//       const post = await postsAPI.getPost(id);
//       dispatch({ type: GET_POST_SUCCESS }, post);
//     } catch (error) {
//       dispatch({ type: GET_POST_ERROR, error });
//     }
//   };
// };
//! refactoring
export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);

// 최초 상태
// const initialState = {
//   posts: {
//     loading: false,
//     data: null,
//     error: null
//   },
//   post: {
//     loading: false,
//     data: null,
//     error: null
//   }
// };
//! refactoring
const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial()
};

// 리듀서
// export default function posts(state = initialState, action) {
//   switch (action.type) {
//     case GET_POSTS:
//       return {
//         ...state,
//         posts: {
//           loading: true,
//           data: null,
//           error: null
//         }
//       };
//     case GET_POSTS_SUCCESS:
//       return {
//         ...state,
//         posts: {
//           loading: false,
//           data: action.posts,
//           error: null
//         }
//       };
//     case GET_POSTS_ERROR:
//       return {
//         ...state,
//         posts: {
//           loading: false,
//           data: null,
//           error: action.error
//         }
//       };
//     case GET_POST:
//       return {
//         ...state,
//         post: {
//           loading: true,
//           data: null,
//           error: null
//         }
//       };
//     case GET_POST_SUCCESS:
//       return {
//         ...state,
//         post: {
//           loading: false,
//           data: action.post,
//           error: null
//         }
//       };
//     case GET_POST_ERROR:
//       return {
//         ...state,
//         post: {
//           loading: false,
//           data: null,
//           error: action.error
//         }
//       };

//     default:
//       return state;
//   }
// }
// //! refactoring
// export default function posts(state = initialState, action) {
//   switch (action.type) {
//     case GET_POSTS:
//       return {
//         ...state,
//         posts: reducerUtils.loading()
//       };
//     case GET_POSTS_SUCCESS:
//       return {
//         ...state,
//         posts: reducerUtils.success(action.payload)
//       };
//     case GET_POSTS_ERROR:
//       return {
//         ...state,
//         posts: reducerUtils.error(action.error)
//       };
//     case GET_POST:
//       return {
//         ...state,
//         post: reducerUtils.loading()
//       };
//     case GET_POST_SUCCESS:
//       return {
//         ...state,
//         post: reducerUtils.success(action.payload)
//       };
//     case GET_POST_ERROR:
//       return {
//         ...state,
//         post: reducerUtils.error(action.error)
//       };
//     default:
//       return state;
//   }
// }

//! refactoring
export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return handleAsyncActions(GET_POSTS, 'posts', true)(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return handleAsyncActions(GET_POST, 'post')(state, action);
    default:
      return state;
  }
}

export const goToHome = () => (dispatch, getState, { history }) => {
  history.push('/');
};
