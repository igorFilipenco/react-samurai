import { GET_USERS, UNFOLLOW_USER } from '../actionCreators/users';
import { FOLLOW_USER } from '../actionCreators/users';


const initialState = {
  usersList: [
    {
      id: 1,
      followed: false,
      name: 'John',
      surname: 'Wilkins',
      status: 'online',
      location: { country: 'USA', city: 'Iowa' }
    },
    {
      id: 2,
      followed: true,
      name: 'Fedor',
      surname: 'Skripchenko',
      status: 'online',
      location: { country: 'Russia', city: 'Moscow' }
    },
    {
      id: 3,
      followed: false,
      name: 'Hans',
      surname: 'Muller',
      status: 'offline',
      location: { country: 'Germany', city: 'Hamburg' }
    }
  ]
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS: {
      return state;
    }
    case FOLLOW_USER: {
      return {
        ...state,
        usersList: state.usersList.map(user => user.id === action.payload ? { ...user, followed: true } : user)
      };
    }
    case UNFOLLOW_USER: {
      return {
        ...state,
        usersList: state.usersList.map(user => user.id === action.payload ? { ...user, followed: false } : user)
      };
    }
    default:
      return state;
  }
};

export default users;