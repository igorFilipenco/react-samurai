import s from './ProfilePage.module.css';
import MyPosts from '../../myposts/MyPosts';
import ProfileInfo from './info/ProfileInfo';


const ProfilePage = (props) => {
  return (
    <div className={s.container}>
      <ProfileInfo />
      <MyPosts posts={props.posts} addPost={props.addPost}/>
    </div>
  );
};

export default ProfilePage;