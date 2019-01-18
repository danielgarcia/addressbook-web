import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './Login.scss';

class Login extends React.Component {
  public render() {
    return (
      <div className="login-page">
        Login
        <NavLink exact to="/">Dashboard</NavLink>
        <br />
        <NavLink to="/login">Login</NavLink>
      </div>
    );    
  }
}

export default Login;