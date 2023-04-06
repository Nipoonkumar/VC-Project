
import React from 'react';
//import Profile from './component/Profile';
// import './App.css';
// import Card from './component/cardStartup';
 import GuestPage from './component/GuestPage';
// import AddRemoveInputField from './component/AddRemoveInputField';
// import Footer from './component/Footer';
//  import Login from './component/Login';
 //import Navbar from './component/Navbar';
// import Otp from './component/OtpVerification';
 import { BrowserRouter,Routes,Route } from 'react-router-dom';
//  import SignupForm from '/home/nineleaps/project/src/component/Signup.js';
//import Sso from './component/Sso';
import Ulogin from './component/Login';
// import Register from './Registration/Register';
import Registervc from './Registration/RegisterVC';
import { FormProvider } from './component/Context/FormContext';
import Form from './component/form';
//import ButtonPage from './component/SignupOpt';
import Signup from "/home/nineleaps/project/src/component/BsignIn.js";
// import LinkedInSSO from './component/LinkedInSSO';
//import RandomApi from './TestApi';
import Otp from './component/OtpVerification';
// import LinkedInPage from './component/LinkedinTest';
//import Entreprenur from './component/personalinfo';
// import Otp from "/home/nineleaps/project/src/component/OtpVerification";
import HomePage from "/home/nineleaps/project/src/component/HomePage.js";
//import Feed from './component/Feeds';



function App() {
  return (
    <>
    <FormProvider>
      <Form />
    </FormProvider>
    {/* <HomePage/> */}
{/* <RandomApi/> */}
{/* <LinkedInPage/> */}
    {/* <Signup /> */}
      {/* <Navbar/> */}
      
      {/* <Card/> */}
      {/* <Count/> */}
      {/* <Otp/> */}
      {/* <Footer /> */}
      {/* <AddRemoveInputField/> */}
      {/* <Register/> */}
      {/* <Registervc/> */}
      {/* <ButtonPage/> */}
      {/* <Sso/> */}
      {/* <Login/> */}
      {/* <Login/> */}
      {/* <GuestPage/> */}
      {/* <Profile/> */}
      {/* <Entreprenur/> */}
      {/* <LinkedInSSO/> */}

      {/* <div> 
        <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<GuestPage/>} />
          <Route exact path='/login' element={<Ulogin/>} />
          <Route exact path='/signup' element={<Signup/>} />
          <Route exact path="/Otp" element={<Otp/>}/>
          <Route exact path="/HomePage" element={<HomePage  />}/>
          
          
        </Routes>
        </BrowserRouter> 
      </div>  */}

    </>

  );
}

export default App;