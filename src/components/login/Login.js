import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-form">
      <h2 className="login-heading">Login</h2>
      <form>
        <input type="email" placeholder="Email" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button type="submit" className="login-button">Login</button>
        <p className="signup-text">Don't have an account? <a href="#">Sign up</a></p>
        <p className="or-text">or</p>
        <button className="google-button">
          <img src="/images/google-logo.png" />
          <span>Sign in with Google</span>
        </button>
      </form>
    </div>
  );
}

export default Login;