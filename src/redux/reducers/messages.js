import {
  MESSAGE_TEXT_UPDATE,
  SEND_MESSAGE
} from '../actionCreators/messages';


const initialState = {
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
    case SEND_MESSAGE: {
      const newMessage = {
        id: 6,
        dialogId: action.payload,
        text: state.newMessageText
      };

      return {
        ...state,
        messagesMockData: [...state.messagesMockData,  newMessage],
        newMessageText: ''
      };
    }
    case MESSAGE_TEXT_UPDATE: {
      return {
        ...state,
        newMessageText: action.payload
      };
    }
    default:
      return state;
  }
};

export default messages;