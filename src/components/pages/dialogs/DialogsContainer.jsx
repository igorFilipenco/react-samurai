//redux
import { connect } from 'react-redux';
import { setActiveDialogActionCreator } from '../../../redux/actionCreators/dialogs';
import {
  messageTextUpdateActionCreator,
  sendMessageActionCreator
} from '../../../redux/actionCreators/messages';
//components
import Dialogs from './Dialogs';


const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs.dialogsMockData,
    activeDialogId: state.dialogs.activeDialogId,
    messages: state.messages.messagesMockData,
    newMessageText: state.messages.newMessageText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDialogItemClick: (dialogId) => dispatch(setActiveDialogActionCreator(dialogId)),
    onMessageBodyUpdate: text => dispatch(messageTextUpdateActionCreator(text)),
    sendMessage: () => dispatch(sendMessageActionCreator())
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;