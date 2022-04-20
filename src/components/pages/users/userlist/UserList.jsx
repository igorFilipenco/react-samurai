import React from 'react';
import s from './UserList.module.css';
import UserListItem from './UserListItem';


const UserList = (props) => {
  const users = props?.users?.map(user => {
    return <UserListItem
      key={user.id}
      user={user}
      followUser={props.followUser}
      unFollowUser={props.unFollowUser}
    />;
  });

  return (
    <ul className={s.userList}>
      {users && users}
    </ul>
  );
};

export default UserList;