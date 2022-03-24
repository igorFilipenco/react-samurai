export const MESSAGE_TEXT_UPDATE = 'MESSAGE_TEXT_UPDATE';
export const SEND_MESSAGE = 'SEND_MESSAGE';


export const messageTextUpdateActionCreator = (message = '') => ({
  type: MESSAGE_TEXT_UPDATE,
  payload: message
});

export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE,
  payload: null
});