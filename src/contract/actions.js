import state from './state';
import { renderApp } from '../renderApp';


export const onPostTextChange = (postText) => {
  state.profilePage.newPostText = postText;
  renderApp(state);
};

export const addPost = () => {
  const newPost = {
    id: 1,
    text: state.profilePage.newPostText,
    likes: 0
  };

  state.profilePage.postsMockData.push(newPost);
  state.profilePage.newPostText = '';
  renderApp(state);
};