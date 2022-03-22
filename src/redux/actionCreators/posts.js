export const ADD_POST = 'ADD_POST';
export const POST_TEXT_UPDATE = 'POST_TEXT_UPDATE';


export const addPostActionCreator = () => ({
  type: ADD_POST,
  payload: null
});

export const postTextChangeActionCreator = (postText = '') => ({
  type: POST_TEXT_UPDATE,
  payload: postText
});