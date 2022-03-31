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
    case ADD_POST: {
      const newPost = {
        id: 1,
        text: state.newPostText,
        likes: 0
      };

      return {
        ...state,
        postsMockData: [...state.postsMockData, newPost],
        newPostText: ''
      };
    }
    case POST_TEXT_UPDATE: {
      return {
        ...state,
        newPostText: action.payload
      };
    }
    default:
      return state;
  }
};

export default posts;