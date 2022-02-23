import { Routes } from 'react-router-dom';
//components
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
//services
import RoutingService from './utils/RoutingService';
//style
import './App.css';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Routes>
          {RoutingService.getRoutes(props.state, props.addPost, props.onPostTextChange)}
        </Routes>
      </div>
    </div>
  );
};

export default App;
