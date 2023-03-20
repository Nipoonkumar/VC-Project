import React, { useState } from "react";
import Sso from "./Sso";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const SubmitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  }

  const divShadow = {
        
    boxShadow: '7px 7px 24px 4px #737373',
    margin: '4em',
    padding: '1em',
    width:'500px',
    height:'300px',
    display:'block',
  }; 

  return (
    <div className="container" style={divShadow}>
      <h1>Log In</h1>
      <form action="" onSubmit={SubmitForm}>
        <div className="input-block">
          <label htmlFor="email">Email</label>
          <input
            className="txtForm"
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-block">
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
        <button type="submit" className="btn" >
          Login
        </button>

      </form>

      <Sso />
    </div>
  );
}
export default Login;
