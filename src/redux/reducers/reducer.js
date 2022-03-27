import { combineReducers } from 'redux';
import messages from './messages';
import dialogs from './dialogs';
import posts from './posts';


const reducer = combineReducers({
  messages: messages,
  dialogs: dialogs,
  posts: posts
});

export default reducer;