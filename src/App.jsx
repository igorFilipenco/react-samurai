import { Routes } from 'react-router-dom';
//components
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
//services
import RoutingService from './services/RoutingService';
//style
import './App.css';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Routes>
          {RoutingService.getRoutes()}
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
