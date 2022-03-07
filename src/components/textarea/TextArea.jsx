import React from 'react';
import s from './TextArea.module.css';


const TextArea = (props) => {
  return (
    <textarea
      className={s.textareaClass}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};

export default TextArea;