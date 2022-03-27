import {
  MESSAGE_TEXT_UPDATE,
  SEND_MESSAGE
} from '../actionCreators/messages';


const initialState = {
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
};

const messages = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: 6,
        dialogId: action.payload,
        text: state.newMessageText
      };

      state.messagesMockData.push(newMessage);
      state.newMessageText = '';

      return state;
    case MESSAGE_TEXT_UPDATE:
      state.newMessageText = action.payload;
      return state;
    default:
      return state;
  }
};

export default messages;