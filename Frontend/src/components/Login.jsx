import React from 'react'
import './Login_Signup.css'
import { useState } from 'react'
import eyeClose from '../assets/eye-close.svg'
import eyeOpen from '../assets/eye-open.svg'
import { Link } from 'react-router-dom'


const Login = () => {
  const [eye, setEye] = useState(eyeClose);
  const [type, setType] = useState("password");

  function eyeClicked() {
    if (type === "password"){
      setEye(eyeOpen);
      setType("text");
    }
    else{
      setEye(eyeClose);
      setType("password");
    }
  };

  return (
    <>
    <div className='outer-container'>
      <div className="left-text">
        Add text and features here
      </div>
      <div className="form-container">
        <form className="form">
          <div className="header">
            Login
          </div>
          <div className="field">
            <span>Email</span>
            <input type="email" placeholder='Email' size='40' required/>
          </div>
          <div className="field">
            <span>Password</span>
            <input type={type} placeholder="Password" size='60' required/>
            <img src={eye} alt='' width="50px" height="50px" id="password-eye" onClick={(event)=> eyeClicked()}/>
          </div>
          <div className='div-forgot-password'>
            <a href="#">Forgot password?</a>
          </div>
          <div className="div-btn-login">
            <Link to='/home'>
            <button className='btn-login'>Login</button>
            </Link>
            <p>Don't have an Account?</p>
            <Link className='sign-up-link' to='/signup'>Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login