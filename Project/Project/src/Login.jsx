import React from 'react';
import './style2.css';

const Login = () => {
  return (
    <div className="login">
    
     
      <form>
        <h3>Log In As Admin</h3>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
