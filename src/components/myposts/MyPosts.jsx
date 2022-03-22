import React from 'react';
//redux
import {
  addPostActionCreator,
  postTextChangeActionCreator
} from '../../redux/actionCreators/posts';
//components
import Post from './post/Post';
import TextArea from '../textarea/TextArea';
//services
import { makeRandomKey } from '../../utils/Utilities';
import s from './MyPosts.module.css';


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
                onChange={e => props.dispatch(postTextChangeActionCreator(e.target.value))} />
      <div>
        <button onClick={() => props.dispatch(addPostActionCreator())}>
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