import React, { useState } from "react";
import Sso from "./Sso";
import "/home/nineleaps/project/src/css/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const SubmitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };
  return (
    <div className="app-wrapper1">
      <h1>Log In</h1>
      <form action="" onSubmit={SubmitForm}>
        <div className="input-block1">
          <label htmlFor="email">Email</label>
          <input
            className="txtForms"
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-block-2">
          <label className="label">Password</label>
          <input
            className="txtForm"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <div className="Or">
          <p>Or</p>
        </div>
        <div className="Sso">
          <Sso />
        </div>
        <div className="Para">
          <p>
            Doesn't have an account? <a href="/Login.js">Get Started</a>
          </p>
        </div>
      </form>
    </div>
  );
}
export default Login;



// curl --location 'http://192.168.1.128:8080/api/v1/auth/authentication' \
// --header 'Content-Type: application/json' \
// --data-raw '{
//     "email":"rawat1510@gmail.com",
//     "password":"abhinav"
// }'

// curl --location 'http://192.168.1.128:8080/api/v1/auth/authentication' \
// --header 'Content-Type: application/json' \
// --data-raw '{
//     "email":"rawat1510@gmail.com",
//     "password":"abhinav@123"
// }'


// curl -X POST -d "email=Nik@gmail.com.com&password=Nik@123" http://192.168.1.128:8080/api/v1/auth/authentication

// curl -X POST -d "username=myusername&password=mypassword" http://192.168.1.100:80/api/login

// http://localhost:8080/api/v1/auth/authentication



// Nik@123
// Nik@gmail.com

