import {
  ADD_POST,
  POST_TEXT_UPDATE
} from '../actionCreators/posts';


const initialState = {
  postsMockData: [
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
  ],
  newPostText: ''
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 1,
        text: state.newPostText,
        likes: 0
      };

      state.postsMockData.push(newPost);
      state.newPostText = '';

      return state;
    case POST_TEXT_UPDATE:
      state.newPostText = action.payload;
      return state;
    default:
      return state;
  }
};

export default posts;