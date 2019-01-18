import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './Dashboard.scss';

class Dashboard extends React.Component {
  public render () {
    return (
      <div className="dashboard-page">
        Dashboard Page
        <NavLink exact to="/">Dashboard</NavLink>
        <br />
        <NavLink to="/login">Login</NavLink>
      </div>
    );
  }
}

export default Dashboard;