import s from './ProfilePage.module.css';
import ProfileInfo from './info/ProfileInfo';
import MyPostsContainer from '../../myposts/MyPostsContainer';


const ProfilePage = (props) => {
  return (
    <div className={s.container}>
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default ProfilePage;