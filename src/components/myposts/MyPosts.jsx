import React from 'react';
//components
import Post from './post/Post';
import TextArea from '../textarea/TextArea';
//services
import { makeRandomKey } from '../../utils/Utilities';
import s from './MyPosts.module.css';


const MyPosts = (props) => {
  const posts = props?.posts?.map(postData => <Post key={makeRandomKey()} id={postData?.id} text={postData?.text}
                                                    likes={postData?.likes} />);
  const onPostTextChange = (e) => {
    props.onPostTextChange(e.target.value);
  };

  const addPost = () => {
    props.addPost();
  };

  return (
    <div>
      <h2>
        My Posts
      </h2>
      <TextArea value={props.newPostText}
                placeholder={'Create new post...'}
                onChange={e => onPostTextChange(e)} />
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