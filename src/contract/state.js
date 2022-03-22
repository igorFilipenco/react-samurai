//redux-store simulator


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
      messagesMockData: [
        {
          text: 'Hi'
        },
        {
          text: 'How are you?'
        },
        {
          text: 'Im fine'
        }
      ]
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
      case 'ADD_POST':
        this.addPost();
        break;
      case 'POST_TEXT_UPDATE':
        this.onPostTextChange(action.payload);
        break;
    }
  }
};

export default store;
