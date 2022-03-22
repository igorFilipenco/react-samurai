import React from 'react';
//components
import Post from './post/Post';
//services
import { makeRandomKey } from '../../utils/Utilities';
import s from './MyPosts.module.css';
import TextArea from '../textarea/TextArea';


const MyPosts = (props) => {
  const posts = props?.posts?.map(postData => <Post key={makeRandomKey()} id={postData?.id} text={postData?.text}
                                                    likes={postData?.likes} />);

  return (
    <div>
      <h2>
        My Posts
      </h2>
      <TextArea value={props.newPostText}
                placeholder={'Create new post...'}
                onChange={e => props.dispatch({ type: 'POST_TEXT_UPDATE', payload: e.target.value })} />
      <div>
        <button onClick={() => props.dispatch({ type: 'ADD_POST' })}>
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