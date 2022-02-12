import s from './Dialogs.module.css';
import Dialog from './dialog/Dialog';
import Message from './message/Message';

let dialogsMockData = [
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
];

let messagesMockData = [
  {
    text: 'Hi'
  },
  {
    text: 'How are you?'
  },
  {
    text: 'Im fine'
  }
];

const Dialogs = () => {
  return (
    <div className={s.dialogsContainer}>
      <div className={s.dialogs}>
        {
          dialogsMockData.map(dialogData => <Dialog name={dialogData?.name} id={dialogData?.id}
                                                    isActive={dialogData?.isActive} />)
        }
      </div>

      <div className={s.messages}>
        {
          messagesMockData.map(messageData => <Message text={messageData?.text} />)
        }
      </div>
    </div>
  );
};

export default Dialogs;