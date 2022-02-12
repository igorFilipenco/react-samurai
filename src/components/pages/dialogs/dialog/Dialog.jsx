import s from './Dialog.module.css';
import { Link } from 'react-router-dom';


const Dialog = (props) => {
  const path = '/dialogs/' + props?.id;
  const dialogStyle = props.isActive ? s.dialog + ' ' + s.active : s.dialog;

  return (
    <div className={dialogStyle}>
      <Link to={path}>
        {props?.name}
      </Link>
    </div>
  );
};

export default Dialog;