import axios from 'axios';
import { Api } from '../../constants/Api';

export const GET_USERS = 'GET_USERS';
export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';


export const getUsersActionCreator = () => {
  return (dispatch) => {
    return axios.get(Api.BASE_V1 + '/users')
      .then(response => {
          dispatch({
            type: GET_USERS,
            payload: response?.data?.items
          });
        }
      );
  };
};

export const followUserActionCreator = (userId) => ({
  type: FOLLOW_USER,
  payload: userId
});

export const unFollowUserActionCreator = (userId) => ({
  type: UNFOLLOW_USER,
  payload: userId
});