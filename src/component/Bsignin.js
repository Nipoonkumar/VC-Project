import React, { useRef }from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { signUpSchema } from "../schemas/validation";
import Otp from "../component/OtpVerification";

import axios from "./axios";
import "/home/nineleaps/project/src/css/Signup.css";
// import { useEffect } from 'react';
import Sso from "./Sso";
import { useState } from "react";
const initialValues = {
  signuptype: "",
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
};
function Signup() {
  const [signuptype, setSignuptype] = useState();
  const handleChanged = (e) => {
    const target = e.target;
    if (target.checked) {
      setSignuptype(target.value);
    }
  };
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log({
        signuptype: signuptype,
        name: values.name,
        email: values.email,
        password: values.password,
        confirmpassword: values.confirmpassword,
      });
      // axios
      //   .post("http://localhost:8081/api/v1/auth/registration", {
      //     signuptype: values.signuptype,
      //     name: values.name,
      //     email: values.email,
      //     password: values.password,
      //     confirmpassword: values.confirmpassword,
      //   })
      //   .then((result) => {
      //     console.log(result);
      //     action.resetForm();
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
  });
  return (
    <>
      <div className="container-signup">
        <h2 className="title-signup">Create Account</h2>
        <div className="app-wrapper-signup">
          <form onSubmit={handleSubmit}>
            <div onClick={handleChanged}>
              <input
                type="radio"
                className="Signuptype"
                id="1"
                value="investor"
                checked={signuptype == "investor"}
                onChange={handleChanged}
              />
              Investor
              <input
                type="radio"
                className="Signuptype"
                id="2"
                value="startup"
                checked={signuptype == "startup"}
                onChange={handleChanged}
              />
              StartUp
            </div>
            <div className="input-block-signup">
              <label className="label-signup">Name</label>
              <input
                className="txtForm-signup"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                autoComplete="off"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="form-error">{errors.name}</p>
              ) : null}
            </div>
            <div className="input-block-signup">
              <label className="label-signup">Email</label>
              <input
                className="txtForm-signup"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                autoComplete="off"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
            </div>
            <div className="input-block-signup">
              <label className="label-signup">Password</label>
              <input
                className="txtForm-signup"
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
            </div>
            <div className="input-block-signup">
              <label className="label-signup">Confirm Password</label>
              <input
                className="txtForm-signup"
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                placeholder="Confirm Password"
                autoComplete="off"
                value={values.confirmpassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirmpassword && touched.confirmpassword ? (
                <p className="form-error">{errors.confirmpassword}</p>
              ) : null}
            </div>
            <div>
           
                <button className="submit" type="submit">Signup</button> 
                
              
            </div>
            <p>Or</p>
            <div className="Sso">{/* <Sso /> */}</div>
            <div className="Para">
              <p>
                Already have an account? <a href="/Login.js">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="side-container">
        <p></p>
      </div>
    </>
  );
}
export default Signup;