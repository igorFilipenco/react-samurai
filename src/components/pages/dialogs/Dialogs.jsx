import s from './Dialogs.module.css';
import Dialog from './dialog/Dialog';
import Message from './message/Message';
import { makeRandomKey } from '../../../services/Utilities';


const Dialogs = (props) => {
  const dialogs = props?.dialogs?.map(dialogData => <Dialog key={makeRandomKey()} name={dialogData?.name} id={dialogData?.id}
                                                            isActive={dialogData?.isActive} />);
  const messages = props?.messages?.map(messageData => <Message key = {makeRandomKey()} text={messageData?.text} />);

  return (
    <div className={s.dialogsContainer}>
      <div className={s.dialogs}>
        {dialogs}
      </div>
      <div className={s.messages}>
        {messages}
      </div>
    </div>
  );
};

export default Dialogs;