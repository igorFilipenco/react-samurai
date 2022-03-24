//redux
import { setActiveDialogActionCreator } from '../../../redux/actionCreators/dialogs';
import {
  messageTextUpdateActionCreator,
  sendMessageActionCreator
}
  from '../../../redux/actionCreators/messages';
//components
import Dialog from './dialog/Dialog';
import Message from './message/Message';
import TextArea from '../../textarea/TextArea';
//services
import { makeRandomKey } from '../../../utils/Utilities';
import s from './Dialogs.module.css';


const Dialogs = (props) => {
  const {
    activeDialogId
  } = props;
  const dialogs = props?.dialogs?.map(dialogData => <Dialog
    onDialogItemClick={() => props.dispatch(setActiveDialogActionCreator(dialogData.id))}
    key={makeRandomKey()}
    name={dialogData?.name}
    id={dialogData?.id}
    isActive={activeDialogId === dialogData.id}
  />);
  const messages = props?.messages?.map(messageData => messageData.dialogId === activeDialogId &&
    <Message key={makeRandomKey()} text={messageData?.text} />);
  const onMessageBodyUpdate = e => props.dispatch(messageTextUpdateActionCreator(e.target.value));
  const sendMessage = () => props.dispatch(sendMessageActionCreator());

  return (
    <div className={s.dialogsContainer}>
      <div className={s.dialogs}>
        {dialogs}
      </div>
      <div className={s.messages}>
        {messages}
        <div className={s.sendMessageWrapper}>
          <TextArea value={props.newMessageText}
                    placeholder={'New message...'}
                    onChange={onMessageBodyUpdate}
          />
          <button className={s.sendButton}
                  onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;