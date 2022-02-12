import s from './Post.module.css';

const Post = (props) => {
  return (
    <div id={props?.id} className={s.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgc6g8QbBKSPRjLF9MBZT32i0ddlbpgsRr0g&usqp=CAU' />
      <div>
        {props?.text}
      </div>
      <div className={s.item}>
        comment
      </div>
      <div>
        {props?.likes}Likes
      </div>
    </div>
  );
};

export default Post;