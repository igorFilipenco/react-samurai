//redux-store simulator
import {
  ADD_POST,
  POST_TEXT_UPDATE
} from './actionCreators/posts';
import {
  MESSAGE_TEXT_UPDATE,
  SEND_MESSAGE
} from './actionCreators/messages';
import { SET_ACTIVE_DIALOG } from './actionCreators/dialogs';


let store = {
  _state: {
    messagePage: {
      dialogsMockData: [
        {
          id: 1,
          name: 'Harry',
          isActive: true
        },
        {
          id: 2,
          name: 'John',
          isActive: false
        },
        {
          id: 3,
          name: 'Heidi',
          isActive: false
        },
        {
          id: 4,
          name: 'Crissy',
          isActive: false
        },
        {
          id: 5,
          name: 'Bill',
          isActive: false
        }
      ],
      activeDialogId: 1,
      messagesMockData: [
        {
          id: 1,
          dialogId: 1,
          text: 'Hi'
        },
        {
          id: 2,
          dialogId: 1,
          text: 'How are you?'
        },
        {
          id: 3,
          dialogId: 1,
          text: 'Im fine'
        },
        {
          id: 4,
          dialogId: 2,
          text: 'Hi lets go for a beer'
        },
        {
          id: 5,
          dialogId: 2,
          text: 'Go'
        }
      ],
      newMessageText: ''
    },
    profilePage: {
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
    }
  },
  _callSubscriber() {
    console.log('State update');
  },
  getState() {
    return this._state;
  },
  onPostTextChange(postText = '') {
    this._state.profilePage.newPostText = postText;
    this._callSubscriber(this._state);
  },
  onMessageTextChange(message = '') {
    this._state.messagePage.newMessageText = message;
    this._callSubscriber(this._state);
  },
  addPost() {
    const newPost = {
      id: 1,
      text: this._state.profilePage.newPostText,
      likes: 0
    };

    this._state.profilePage.postsMockData.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  sendMessage() {
    const newMessage = {
      id: 6,
      dialogId: this._state.messagePage.activeDialogId,
      text: this._state.messagePage.newMessageText
    };
    this._state.messagePage.messagesMockData.push(newMessage);
    this._state.messagePage.newMessageText = '';
    this._callSubscriber(this._state);
  },
  setActiveDialog(dialogId = 1) {
    this._state.messagePage.activeDialogId = dialogId;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  /**
   * redux-like dispatcher
   * @param action - Object {
   *     type : action_name
   *     payload : data
   * }
   */
  dispatch(action = {}) {
    switch (action.type) {
      case ADD_POST:
        this.addPost();
        break;
      case POST_TEXT_UPDATE:
        this.onPostTextChange(action.payload);
        break;
      case MESSAGE_TEXT_UPDATE:
        this.onMessageTextChange(action.payload);
        break;
      case SEND_MESSAGE:
        this.sendMessage(action.payload);
        break;
      case SET_ACTIVE_DIALOG:
        this.setActiveDialog(action.payload);
        break;
    }
  }
};

export default store;
