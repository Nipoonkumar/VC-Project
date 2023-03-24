import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/validation";
import axios from "./axios";
import "/home/nineleaps/project/src/css/Login.css";
import Sso from "./Sso";
import { useState } from "react";
import "/home/nineleaps/project/src/css/Signup.css"

// import Navbar from "./Navbar";


const initialValues = {
  signuptype:  "",
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
};
function SignupForm() {
  

  const [signuptype, setSignuptype] = useState('');
  const handleChanged = (e) => {
    const target = e.target;
    if (target.checked) {
      setSignuptype(target.value);
    }
  };


  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log(values);
      axios
        .post("http://192.168.1.128:8080/api/v1/auth/registration/Entrepreneur", {
          name: values.name,
          email: values.email,
          password: values.password,
          confirmpassword: values.confirmpassword,
        })
        .then((result) => {
          console.log(result);
          action.resetForm();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  return (
    <>
      {/* <Navbar/>  */}
      <div className="containerss">
        <h2 className="title">Create Account</h2>
        <div className="app-wrapper">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="radio"
                className="Signuptype"
                id="investor"
                value="investor"
                checked={signuptype === "investor"}
                onChange={handleChanged}
              />
              <label htmlFor="investor">Investor</label>

              <input
                type="radio"
                className="Signuptype"
                id="startup"
                value="startup"
                checked={signuptype === "startup"}
                onChange={handleChanged}
              />
              <label htmlFor="startup">StartUp</label>
            </div>
            <div className="input-block">
              <label className="label">Name</label>
              <input
                className="txtForm"
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
            <div className="input-block">
              <label className="label">Email</label>
              <input
                className="txtForm"
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
            <div className="input-block">
              <label className="label">Password</label>
              <input
                className="txtForm"
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
            <div className="input-block">
              <label className="label">Confirm Password</label>
              <input
                className="txtForm"
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
              <button className="submit" type="submit">
                Sign Up
              </button>
            </div>
            <p>Or</p>
            <div className="Sso">
              <Sso />
            </div>
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
export default SignupForm;





// curl --location 'http://192.168.1.128:8080/api/v1/auth/registration/Entrepreneur' \
// --header 'Content-Type: application/json' \
// --data-raw '{
//     "name":"NIK",
//     "email":"Nik@gmail.com",
//     "password":"Nik@123",
//     "Confirm_password":"Nik@123",
//     "roleType":"Admin"
// }'