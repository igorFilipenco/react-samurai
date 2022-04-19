import { Route } from 'react-router-dom';
//components
import ProfilePage from '../components/pages/profile/ProfilePage';
import DialogsContainer from '../components/pages/dialogs/DialogsContainer';
import UsersPageContainer from '../components/pages/users/UsersPageContainer';
//services
import { makeRandomKey } from './Utilities';


/**
 * Service-helper to work with app urls\routes
 */
class RoutingService {

  /**
   * Method to get all app route-components
   * @returns array of <Routes/> {JSX.Element[]}
   */
  static getRoutes = () => {
    return [
      <Route key={makeRandomKey()}
             path='/'
             element={<ProfilePage/>}
      />,
      <Route key={makeRandomKey()}
             path='/profile'
             element={<ProfilePage/>}
      />,
      <Route key={makeRandomKey()}
             path='/dialogs'
             element={<DialogsContainer/>}
      />,
      <Route key={makeRandomKey()}
             path='/dialogs/:dialogId'
             element={<DialogsContainer/>}
      />,
      <Route key={makeRandomKey()}
             path='/users'
             element={<UsersPageContainer/>}
      />
    ];
  };
}

export default RoutingService;
