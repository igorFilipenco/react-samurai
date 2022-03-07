import { Route } from 'react-router-dom';
//components
import ProfilePage from '../components/pages/profile/ProfilePage';
import Dialogs from '../components/pages/dialogs/Dialogs';
//services
import { makeRandomKey } from './Utilities';
import store from '../contract/state';


/**
 * Service-helper to work with app urls\routes
 */
class RoutingService {

  /**
   * Method to get all app route-components
   * @returns array of <Routes/> {JSX.Element[]}
   */
  static getRoutes = (state = {}) => {
    const {
      dialogsMockData,
      messagesMockData
    } = state.messagePage;
    const {
      postsMockData,
      newPostText
    } = state.profilePage;

    return [
      <Route key={makeRandomKey()}
             path='/'
             element={<ProfilePage posts={postsMockData}
                                   addPost={store.addPost.bind(store)}
                                   onPostTextChange={store.onPostTextChange.bind(store)}
                                   newPostText={newPostText} />}
      />,
      <Route key={makeRandomKey()}
             path='/profile'
             element={<ProfilePage posts={postsMockData}
                                   addPost={store.addPost.bind(store)}
                                   onPostTextChange={store.onPostTextChange.bind(store)}
                                   newPostText={newPostText} />}
      />,
      <Route key={makeRandomKey()}
             path='/dialogs'
             element={<Dialogs dialogs={dialogsMockData}
                               messages={messagesMockData} />}
      />,
      <Route key={makeRandomKey()} path='/dialogs/:dialogId' element={<Dialogs />} />
    ];
  };
}

export default RoutingService;
