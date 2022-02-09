import ProfilePage from '../components/pages/profile/ProfilePage';
import Dialogs from '../components/pages/dialogs/Dialogs';
import { Route } from 'react-router-dom';

/**
 * Service-helper to work with app urls\routes
 */
class RoutingService {

  /**
   * Method to get all app route-components
   * @returns {JSX.Element[]}
   */
  static getRoutes = () => {
    return [
      <Route path='/' exact element={<ProfilePage />} />,
      <Route path='/profile' element={<ProfilePage />} />,
      <Route path='/dialogs' element={<Dialogs />} />,
    ]
  };
}

export default RoutingService;