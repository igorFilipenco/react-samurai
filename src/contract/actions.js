import state from './state';
import { renderApp } from '../renderApp';

export const addPost = (postText) => {
    const newPost = {
      id: 1,
      text: postText,
      likes: 0
    };

    state.profilePage.postsMockData.push(newPost);
    renderApp(state);
};