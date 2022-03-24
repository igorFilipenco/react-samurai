import { Route } from 'react-router-dom';
//components
import ProfilePage from '../components/pages/profile/ProfilePage';
import Dialogs from '../components/pages/dialogs/Dialogs';
//services
import { makeRandomKey } from './Utilities';
import store from '../redux/state';


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
      messagesMockData,
      newMessageText,
      activeDialogId
    } = state.messagePage;
    const {
      postsMockData,
      newPostText
    } = state.profilePage;

    return [
      <Route key={makeRandomKey()}
             path='/'
             element={<ProfilePage posts={postsMockData}
                                   dispatch={store.dispatch.bind(store)}
                                   newPostText={newPostText}
             />}
      />,
      <Route key={makeRandomKey()}
             path='/profile'
             element={<ProfilePage posts={postsMockData}
                                   dispatch={store.dispatch.bind(store)}
                                   newPostText={newPostText}
             />}
      />,
      <Route key={makeRandomKey()}
             path='/dialogs'
             element={<Dialogs
               newMessageText={newMessageText}
               activeDialogId={activeDialogId}
               dialogs={dialogsMockData}
               messages={messagesMockData}
               dispatch={store.dispatch.bind(store)}
             />}
      />,
      <Route key={makeRandomKey()}
             path='/dialogs/:dialogId'
             element={<Dialogs
               newMessageText={newMessageText}
               activeDialogId={activeDialogId}
               dialogs={dialogsMockData}
               messages={messagesMockData}
               dispatch={store.dispatch.bind(store)}
             />}
      />
    ];
  };
}

export default RoutingService;
