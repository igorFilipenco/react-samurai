import { connect } from 'react-redux';
import {
  followUserActionCreator,
  getUsersActionCreator, unFollowUserActionCreator
} from '../../../redux/actionCreators/users';
import UsersPage from './UsersPage';


const mapStateToProps = (state) => {
  return {
    users: state.users.usersList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsersActionCreator()),
    followUser: (userId) => dispatch(followUserActionCreator(userId)),
    unFollowUser: (userId) => dispatch(unFollowUserActionCreator(userId))
  };
};

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage);

export default UsersPageContainer;
