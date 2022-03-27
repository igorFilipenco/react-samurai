import store from '../reduxStore';

export const MESSAGE_TEXT_UPDATE = 'MESSAGE_TEXT_UPDATE';
export const SEND_MESSAGE = 'SEND_MESSAGE';


export const messageTextUpdateActionCreator = (message = '') => ({
  type: MESSAGE_TEXT_UPDATE,
  payload: message
});

export const sendMessageActionCreator = () => {
  const state = store.getState();
  const activeDialogId = state.dialogs.activeDialogId;

  return {
    type: SEND_MESSAGE,
    payload: activeDialogId
  }
};