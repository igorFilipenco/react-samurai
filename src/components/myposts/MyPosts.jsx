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
  const postTextRef = React.createRef();

  const addPost = () => {
    props.addPost(postTextRef.current.value);
    postTextRef.current.value = '';
  };

  return (
    <div>
      <h2>
        My Posts
      </h2>
      <TextArea textAreaRef={postTextRef} />
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