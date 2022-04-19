import React from 'react';
import UserList from './userlist/UserList';


const UsersPage = (props) => {
  return (
    <div>
      <UserList
        users={props.users}
        followUser={props.followUser}
        unFollowUser={props.unFollowUser}
      />
    </div>
  );
};

export default UsersPage;