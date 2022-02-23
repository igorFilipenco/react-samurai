//data-contracts to fill components with data before connecting to api

let state = {
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
};

export default state;
