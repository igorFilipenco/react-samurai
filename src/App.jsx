import { Route, Routes } from 'react-router-dom';
//components
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import ProfilePage from './components/pages/profile/ProfilePage';
import Dialogs from './components/pages/dialogs/Dialogs';
//style
import './App.css';


// import s from './App.css';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/' exact element={<ProfilePage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/dialogs' element={<Dialogs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
