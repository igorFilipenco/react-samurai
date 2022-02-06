import s from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgc6g8QbBKSPRjLF9MBZT32i0ddlbpgsRr0g&usqp=CAU'/>
        <div>
          {props.message}
        </div>
        <div>
          Like
        </div>
      </div>
    </div>
  );
};

export default Post;