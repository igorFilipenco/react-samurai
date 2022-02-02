import './App.css';
//components
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import ProfilePage from './components/pages/profile/ProfilePage';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <NavBar/>
      <ProfilePage/>
      <Footer/>
    </div>
  );
}

export default App;
