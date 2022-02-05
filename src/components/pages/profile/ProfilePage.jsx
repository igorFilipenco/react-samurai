import s from './ProfilePage.module.css';

const ProfilePage = () => {
  return(
    <div className={s.content}>
      <img src='https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-thumb.jpg' alt='logo'/>
      <div className={s.item}>
          Avatar
      </div>
      <div className={s.item}>
          my posts
      </div>
      <div className={s.item}>
          comments
      </div>
    </div>
  )
}

export default ProfilePage;