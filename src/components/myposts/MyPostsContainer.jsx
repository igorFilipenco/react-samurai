//redux
import { connect } from 'react-redux';
import {
  addPostActionCreator,
  postTextChangeActionCreator
} from '../../redux/actionCreators/posts';
//components
import MyPosts from './MyPosts';


const mapStateToProps = (state) => {
  return {
    posts: state.posts.postsMockData,
    newPostText: state.posts.newPostText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPostTextChange: text => dispatch(postTextChangeActionCreator(text)),
    addPost: () => dispatch(addPostActionCreator())
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;