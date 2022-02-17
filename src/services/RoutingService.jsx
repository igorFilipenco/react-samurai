import ProfilePage from '../components/pages/profile/ProfilePage';
import Dialogs from '../components/pages/dialogs/Dialogs';
import { Route } from 'react-router-dom';
import {
  dialogsMockData,
  messagesMockData,
  postsMockData
} from '../contract/mockData';
import { makeRandomKey } from './Utilities';


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
      <Route key={makeRandomKey()} path='/' exact element={<ProfilePage />} />,
      <Route key={makeRandomKey()} path='/profile' exact element={<ProfilePage posts={postsMockData}/>} />,
      <Route key={makeRandomKey()} path='/dialogs'  element={<Dialogs dialogs={dialogsMockData} messages={messagesMockData}/>} />,
      <Route key={makeRandomKey()} path='/dialogs/:dialogId' element={<Dialogs />} />,
    ]
  };
}

export default RoutingService;
