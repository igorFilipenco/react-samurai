import s from './ProfilePage.module.css';
import MyPosts from '../../myposts/MyPosts';
import ProfileInfo from './info/ProfileInfo';


const ProfilePage = () => {
  return (
    <div className={s.container}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default ProfilePage;