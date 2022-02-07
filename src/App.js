import './App.css';
//components
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
// import ProfilePage from './components/pages/profile/ProfilePage';
import Dialogs from './components/pages/dialogs/Dialogs';
// import s from './App.css';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Dialogs />
        {/*<ProfilePage/>*/}
      </div>
      <Footer />
    </div>
  );
};

export default App;
