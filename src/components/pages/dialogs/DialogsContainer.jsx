//redux
import { setActiveDialogActionCreator } from '../../../redux/actionCreators/dialogs';
import {
  messageTextUpdateActionCreator,
  sendMessageActionCreator
}
  from '../../../redux/actionCreators/messages';
//components
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
  const {
    messagesMockData,
    dialogsMockData,
    newMessageText
  } = props.store.messages;
  const {
    activeDialogId,
  } = props.store.dialogs;

  const onDialogItemClick = (dialogId) => props.dispatch(setActiveDialogActionCreator(dialogId));
  const onMessageBodyUpdate = text => props.dispatch(messageTextUpdateActionCreator(text));
  const sendMessage = () => props.dispatch(sendMessageActionCreator());

  return (
    <Dialogs
      dialogs={dialogsMockData}
      messages={messagesMockData}
      activeDialogId={activeDialogId}
      newMessageText={newMessageText}
      onDialogItemClick={onDialogItemClick}
      onMessageBodyUpdate={onMessageBodyUpdate}
      sendMessage={sendMessage}
    />
  );
};

export default DialogsContainer;