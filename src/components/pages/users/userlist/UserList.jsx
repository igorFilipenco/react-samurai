import React from 'react';
import { makeRandomKey } from '../../../../utils/Utilities';


const UserList = (props) => {
  const users = props?.users?.map(user => {
    return <li key={makeRandomKey()}>
      <span>
        {user.followed ? <button onClick={() => props.unFollowUser(user.id)}>Unfollow</button>
          :
          <button
          onClick={() => props.followUser(user.id)}
          >
            Follow
          </button>
        }
      </span>
      {user.name} {user.surname}
    </li>;
  });


  return (
    <ul>
      {users && users}
    </ul>
  );
};

export default UserList;