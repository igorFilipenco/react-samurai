import React from 'react';
import s from './UserList.module.css';
import noPhotoUserIcon from '../../../../assets/images/no-avatar-user.png';


const UserListItem = (props) => {
  return (
    <li>
      <div className={s.avatarContainer}>
        <img src={noPhotoUserIcon} />
      </div>
      <div>
        {props.user.name} {props.user.surname}
      </div>
      <div>
        {props.user.location.country}, {props.user.location.city}
      </div>
      <span>
        {props.user.followed ?
          <button onClick={() => props.unFollowUser(props.user.id)}>
            Unfollow
          </button>
          :
          <button onClick={() => props.followUser(props.user.id)}>
            Follow
          </button>
        }
      </span>
    </li>
  );
};

export default UserListItem;