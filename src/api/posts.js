import axios from 'axios';
const sleep = (ms) => {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      resolve();
    }, ms);
  });
};

// 임시 데이터
const posts = [
  { id: 1, title: 'title1111', body: 'body 내용입니다' },
  { id: 2, title: 'title22222', body: 'body 내용입니다2222' },
  { id: 3, title: 'title타이틀 333', body: 'body 내용입니다333' }
];

export const getPosts = async () => {
  // await sleep(1000);
  // return posts;

  const { data } = await axios.get('http://localhost:4000/posts');
  return data;
};

export const getPostById = async (id) => {
  // await sleep(1000);
  // return posts.find((post) => post.id === id);
  const { data } = await axios.get(`http://localhost:4000/posts/${id}`);
  return data;
};
