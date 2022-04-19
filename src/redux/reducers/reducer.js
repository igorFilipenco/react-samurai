import { combineReducers } from 'redux';
import messages from './messages';
import dialogs from './dialogs';
import posts from './posts';
import users from './users';


/**
 * Main reducer
 */
const reducer = combineReducers({
  messages: messages,
  dialogs: dialogs,
  posts: posts,
  users: users
});

export default reducer;