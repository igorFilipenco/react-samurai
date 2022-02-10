import s from './Dialogs.module.css';
import Dialog from './dialog/Dialog';
import Message from './message/Message';


const Dialogs = () => {
  return (
    <div className={s.dialogsContainer}>
      <div className={s.dialogs}>
        <Dialog name='Harry' id={1} isActive={true} />
        <Dialog name='John' id={2} />
        <Dialog name='Heidi' id={3} />
        <Dialog name='Crissy' id={4} />
        <Dialog name='Bill' id={5} />
      </div>

      <div className={s.messages}>
        <Message text='Hi' />
        <Message text='How are you?' />
        <Message text='Im fine'  />
      </div>
    </div>
  );
};

export default Dialogs;