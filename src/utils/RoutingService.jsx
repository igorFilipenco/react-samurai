import { Route } from 'react-router-dom';
//components
import ProfilePage from '../components/pages/profile/ProfilePage';
import DialogsContainer from '../components/pages/dialogs/DialogsContainer';
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
  static getRoutes = (state = {}, dispatch = {}) => {
    return [
      <Route key={makeRandomKey()}
             path='/'
             element={<ProfilePage store={state} dispatch={dispatch} />}
      />,
      <Route key={makeRandomKey()}
             path='/profile'
             element={<ProfilePage store={state} dispatch={dispatch} />}
      />,
      <Route key={makeRandomKey()}
             path='/dialogs'
             element={<DialogsContainer store={state} dispatch={dispatch} />}
      />,
      <Route key={makeRandomKey()}
             path='/dialogs/:dialogId'
             element={<DialogsContainer store={state} dispatch={dispatch} />}
      />
    ];
  };
}

export default RoutingService;
