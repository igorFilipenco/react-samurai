// import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';


export const getUsersActionCreator = () => (
//   axios.get('https://social-network.samuraijs.com/api/1.0/users')
//     .then(response=>
// )

{
  type: GET_USERS,
  payload: null
}
);

export const followUserActionCreator = (userId) => ({
  type: FOLLOW_USER,
  payload: userId
});

export const unFollowUserActionCreator = (userId) => ({
  type: UNFOLLOW_USER,
  payload: userId
});