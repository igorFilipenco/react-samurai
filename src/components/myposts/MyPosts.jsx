import React from 'react';
//components
import Post from './post/Post';
//services
import { makeRandomKey } from '../../utils/Utilities';
import s from './MyPosts.module.css';


const MyPosts = (props) => {
  const posts = props?.posts?.map(postData => <Post key={makeRandomKey()} id={postData?.id} text={postData?.text} likes={postData?.likes} />);

  const addPost = (e, data) => {
  };

  return (
    <div>
      <h2>
        My Posts
      </h2>
      <textarea />
      <div>
        <button onClick={addPost}>
          Add Button
        </button>
      </div>
      <div className={s.postsContainer}>
        {posts}
      </div>
    </div>
  );
};

export default MyPosts;