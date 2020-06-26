import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../components/PostList';
import { getPosts } from '../modules/posts';

function PostListContainer() {
  const { loading, data, error } = useSelector((state) => {
    console.log('state!!!!!!!!', state);

    return state.posts.posts;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러발생</div>;
  if (!data) return null;

  return <PostList posts={data} />;
}

export default PostListContainer;
