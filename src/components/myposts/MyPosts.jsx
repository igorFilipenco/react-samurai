import s from './MyPosts.module.css';
import Post from './post/Post';


const MyPosts = () => {
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
        <Post message='msg1' />
        <Post message='msg1' />
      </div>
    </div>
  );
};

export default MyPosts;