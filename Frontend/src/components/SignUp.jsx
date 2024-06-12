import React from "react";
import "./Login_Signup.css";
import { useState } from "react";
import eyeClose from "../assets/eye-close.svg";
import eyeOpen from "../assets/eye-open.svg";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [eye, setEye] = useState(eyeClose);
  const [type, setType] = useState("password");

  function eyeClicked() {
    if (type === "password") {
      setEye(eyeOpen);
      setType("text");
    } else {
      setEye(eyeClose);
      setType("password");
    }
  }

  return (
    <>
      <div className="outer-container">
        <div className="left-text">Add text and features here</div>
        <div className="form-container">
          <form className="form">
            <div className="header">Sign Up</div>
            <div className="field_name flex flex-row gap-2">
              <div className="flex flex-col">
                <span>First Name</span>
                <input
                  type="username"
                  placeholder="First Name"
                  size="40"
                  required
                />
              </div>
              <div className="flex flex-col">
                <span>Last Name</span>
                <input
                  type="username"
                  placeholder="Last Name"
                  size="40"
                  required
                />
              </div>
            </div>
            <div className="field">
              <span>Email</span>
              <input type="email" placeholder="Email" size="40" required />
            </div>
            <div className="field">
              <span>Password</span>
              <input type={type} placeholder="Password" size="60" required />
              <img
                src={eye}
                alt=""
                width="50px"
                height="50px"
                id="password-eye"
                onClick={(event) => eyeClicked()}
              />
            </div>
            <div className="field">
              <span>Confirm Password</span>
              <input
                type={type}
                placeholder="Confirm Password"
                size="60"
                required
              />
              <img
                src={eye}
                alt=""
                width="50px"
                height="50px"
                id="password-eye"
                onClick={(event) => eyeClicked()}
              />
            </div>
            <div className="div-forgot-password">
              <a href="#">Forgot password?</a>
            </div>
            <div className="div-btn-login">
              <Link to="/home">
                <button className="btn-login">Sign Up</button>
              </Link>
              <p>Already have an Account?</p>
              <Link className="sign-up-link" to="/">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
