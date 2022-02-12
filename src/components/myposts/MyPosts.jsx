import s from './MyPosts.module.css';
import Post from './post/Post';


const MyPosts = () => {
  let postsMockData = [
    {
      id: 1,
      text: 'Dummy post',
      likes: 0
    },
    {
      id: 2,
      text: 'Test post',
      likes: 1
    },
    {
      id: 3,
      text: 'Hello world post',
      likes: 10
    }
  ];

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
        {
          postsMockData.map(postData =>
            <Post id={postData?.id} text={postData?.text} likes={postData?.likes} />
          )
        }
      </div>
    </div>
  );
};

export default MyPosts;