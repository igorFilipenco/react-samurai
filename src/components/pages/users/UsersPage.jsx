import React from 'react';
import UserList from './userlist/UserList';
import s from './UsersPage.module.css'

const UsersPage = (props) => {
  return (
    <div className={s.pageContainer}>
      <UserList
        users={props.users}
        followUser={props.followUser}
        unFollowUser={props.unFollowUser}
      />
    </div>
  );
};

export default UsersPage;