import React, { useState } from 'react';
import axios from 'axios';
import Sso from "./Sso";
import "/home/nineleaps/project/src/css/Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/api/v1/auth/authentication', {
        email,
        password,
      });

      console.log(response.data);
      // Handle successful login
    } catch (error) {
      console.error(error);
      // Handle failed login
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className='container'>
        <h1>Login</h1>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
    <Sso/>
    </>
  );
};

export default Login;