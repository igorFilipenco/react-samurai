import s from './ProfilePage.module.css';
import MyPosts from '../../myposts/MyPosts';


const ProfilePage = () => {
  return (
    <div>
      <img
        src='https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-thumb.jpg'
        alt='logo' />
      <div className={s.item}>
        Avatar
      </div>
      <MyPosts />
      <div className={s.item}>
        comments
      </div>
    </div>
  );
};

export default ProfilePage;