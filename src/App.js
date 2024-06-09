
import './App.css';
import PasswordGene from './PasswordGen/PasswordGene';
// import CurrencyConverter from './CurrencyConverter/CurrencyConverter';
import Header from './compoenet/H/Header';
import Footer from './compoenet/F/Footer';
import Home from './compoenet/Home';
import About from "./compoenet/About"
import Github from './compoenet/Github';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { User } from './compoenet/H/User/User';
import UserContext from './ContextAPI/Context/UserContext';
import UserContextProvider from './ContextAPI/Context/UserContextProvider';
import Profile from './ContextAPI/Compenet/Profile';
import Login from './ContextAPI/Compenet/Login';

function App() {
  return (
    
    <Router>
      <Header/>

      <UserContextProvider>
        <Login/>
        <Profile/>
        </UserContextProvider>


      <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='about/'element={<About/>}/> 
      <Route path='user/:userId' element={User}/>
      <Route path='github/'element={<Github/>}/> 
      </Routes>
      
      <Footer/>
    </Router> 
  );
}

export default App;
