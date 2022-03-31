import s from './ProfilePage.module.css';
import ProfileInfo from './info/ProfileInfo';
import MyPostsContainer from '../../myposts/MyPostsContainer';


const ProfilePage = () => {
  return (
    <div className={s.container}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default ProfilePage;