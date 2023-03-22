import React from 'react'
import { useFormik } from 'formik';
import { signUpSchema } from '../schemas/validation';
import axios from './axios';

// import { useEffect } from 'react';
// import Sso from './Sso';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmpassword: ''
};

 function SignupForm() {

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,

      onSubmit: (values, action) => {
        console.log(values)
        

    axios.post("http://localhost:8081/api/v1/auth/registration", {
      name: values.name,
      email: values.email,
      password: values.password,
      confirmpassword: values.confirmpassword
    })
    .then(result => {
      console.log(result);
      action.resetForm();
      
    })
    .catch(err => {
      console.log(err);
    });
    
  }
})
    

  return (
    <div className="container"  >
      <h2 className="title">Create Account</h2>
      <div className="app-wrapper">

        <form onSubmit={handleSubmit} >

          <div className="input-block">
            <label className='label'>Name</label>
            <input className='txtForm'
              type="text"
              name="name"
              id='name'
              placeholder='Name'
              autoComplete="off"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (<p className='form-error'>{errors.name}</p>) : null}
          </div>

          <div className="input-block">
            <label className='label'>Email</label>
            <input className='txtForm'
              type="email"
              name="email"
              id='email'
              placeholder='Email'
              autoComplete="off"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (<p className='form-error'>{errors.email}</p>) : null}
          </div>

          <div className="input-block">
            <label className='label'>Password</label>
            <input className='txtForm'
              type="password"
              name="password"
              id='password'
              autoComplete="off"
              placeholder='Password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (<p className='form-error'>{errors.password}</p>) : null}
          </div>

          <div className="input-block">
            <label className='label'>Confirm Password</label>
            <input className='txtForm'
              type="password"
              name="confirmpassword"
              id='confirmpassword'
              placeholder='Confirm Password'
              autoComplete="off"
              value={values.confirmpassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirmpassword && touched.confirmpassword ? (<p className='form-error'>{errors.confirmpassword}</p>) : null}
          </div>
          <div>
            <button className='submit' type='submit'>Register</button>
          </div>

          {/* <Sso/> */}

          <div>
            <p>Already have an account? <a href='/Login.js'>Login</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}
export default SignupForm;