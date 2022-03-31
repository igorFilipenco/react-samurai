//components
import Dialog from './dialog/Dialog';
import Message from './message/Message';
import TextArea from '../../textarea/TextArea';
//services
import { makeRandomKey } from '../../../utils/Utilities';
import s from './Dialogs.module.css';


const Dialogs = (props) => {
  const {
    activeDialogId,
    newMessageText
  } = props;
  const dialogs = props?.dialogs?.map(dialogData => <Dialog
    onDialogItemClick={() => props.onDialogItemClick(dialogData.id)}
    key={makeRandomKey()}
    name={dialogData?.name}
    id={dialogData?.id}
    isActive={activeDialogId === dialogData.id}
  />);
  const messages = props?.messages?.map(messageData => messageData.dialogId === activeDialogId &&
    <Message key={makeRandomKey()} text={messageData?.text} />);
  const onMessageBodyUpdate = e => props.onMessageBodyUpdate(e.target.value);
  const sendMessage = () => props.sendMessage();

  return (
    <div className={s.dialogsContainer}>
      <div className={s.dialogs}>
        {dialogs}
      </div>
      <div className={s.messages}>
        {messages}
        <div className={s.sendMessageWrapper}>
          <TextArea value={newMessageText}
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