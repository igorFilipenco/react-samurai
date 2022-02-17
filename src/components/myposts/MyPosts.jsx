import s from './MyPosts.module.css';
import Post from './post/Post';
import { makeRandomKey } from '../../services/Utilities';


const MyPosts = (props) => {
  const posts = props.posts.map(postData => <Post key={makeRandomKey()} id={postData?.id} text={postData?.text} likes={postData?.likes} />);

  return (
    <div>
      <h2>
        My Posts
      </h2>
      <textarea />
      <div>
        <button>
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