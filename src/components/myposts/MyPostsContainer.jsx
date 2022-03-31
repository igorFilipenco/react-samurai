import React from 'react';
//redux
import { addPostActionCreator, postTextChangeActionCreator } from '../../redux/actionCreators/posts';
//components
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
  // debugger;
  const {
    postsMockData,
    newPostText
  } = props.store.posts;
  const onPostTextChange = (text = '') => {
    props.dispatch(postTextChangeActionCreator(text));
  };

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  return (
    <MyPosts
      posts={postsMockData}
      newPostText={newPostText}
      onPostTextChange={onPostTextChange}
      addPost={addPost}
    />
  );
};

export default MyPostsContainer;