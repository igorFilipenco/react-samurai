import React from 'react';
import s from './TextArea.module.css';

const TextArea = (props) => {

  return (
    <textarea className={s.textareaClass} ref={props.textAreaRef} />
  );
};

export default TextArea;