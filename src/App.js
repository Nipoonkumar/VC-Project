
import React from 'react';
//import Profile from './component/Profile';
// import './App.css';
// import Card from './component/cardStartup';
 import GuestPage from './component/GuestPage';
// import AddRemoveInputField from './component/AddRemoveInputField';
// import Footer from './component/Footer';
 import Login from './component/Login';
 import Navbar from './component/Navbar';
// import Otp from './component/OtpVerification';
 import { BrowserRouter,Routes,Route } from 'react-router-dom';
//  import SignupForm from '/home/nineleaps/project/src/component/Signup.js';
import Sso from './component/Sso';
// import Login from './component/Ulogin';
//import Register from './Registration/Register';
// import Registervc from './Registration/RegisterVC';
//import ButtonPage from './component/SignupOpt';
import Signup from "/home/nineleaps/project/src/component/Bsignin.js";
//import Entreprenur from './component/personalinfo';
import Otp from "/home/nineleaps/project/src/component/OtpVerification";



function App() {
  return (
    <>
    {/* <Signup /> */}
      {/* <Navbar/>
      
      <Card/>
      <Count/>
      <Otp/>
      <Footer />
      <AddRemoveInputField/> */}
      {/* <Register/> */}
      {/* <Registervc/> */}
      {/* <ButtonPage/> */}
      {/* <Sso/> */}
      {/* <Login/> */}
      {/* <Login/> */}
      {/* <GuestPage/> */}
      {/* <Profile/> */}
      {/* <Entreprenur/> */}

      <div>
        <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<GuestPage/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/signup' element={<Signup/>} />
          
          
        </Routes>
        </BrowserRouter>
      </div>

    </>

  );
}

export default App;