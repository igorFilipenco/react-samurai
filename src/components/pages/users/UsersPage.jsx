import React, { useEffect } from 'react';
import UserList from './userlist/UserList';
import s from './UsersPage.module.css'


const UsersPage = (props) => {
  useEffect(() => {
    props.getUsers();
  },[])

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