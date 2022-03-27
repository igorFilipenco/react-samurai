//redux-store simulator
import dialogs from './reducers/dialogs';
import messages from './reducers/messages';
import posts from './reducers/posts';


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
    this._state.messagePage = dialogs(this._state.messagePage, action);
    this._state.messagePage = messages(this._state.messagePage, action);
    this._state.profilePage = posts(this._state.profilePage, action);

    this._callSubscriber(this._state);
  }
};

export default store;
