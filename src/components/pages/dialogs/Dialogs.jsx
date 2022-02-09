import s from './Dialogs.module.css';


const Dialogs = () => {
  return(
    <div className={s.dialogsContainer}>
      <div className={s.dialogs}>
        <div className={s.dialog + ' ' + s.active}>
          Dialog0
        </div>
        <div className={s.dialog}>
          Dialog1
        </div>
        <div className={s.dialog}>
          Dialog2
        </div>
        <div className={s.dialog}>
          Dialog3
        </div>
        <div className={s.dialog}>
          Dialog4
        </div>
      </div>

      <div className={s.messages}>
        <div className={s.message}>
          Hi
        </div>
        <div className={s.message}>
          How are you
        </div>
        <div className={s.message}>
          Good weather today
        </div>
        <div className={s.message}>
          Funny situation
        </div>
        <div className={s.message}>
          great
        </div>
      </div>
    </div>
  )}

export default Dialogs;