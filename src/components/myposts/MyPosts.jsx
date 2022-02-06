//import s from './MyPosts.module.css';

import Post from './post/Post';

const MyPosts = () => {
  return (
    <div>
      My Posts
      <textarea>

      </textarea>
      <button>
        Remove Button
      </button>
      <button>
        Add Button
      </button>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  );
};

export default MyPosts;