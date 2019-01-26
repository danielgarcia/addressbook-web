import * as React from 'react';
import { Link } from 'react-router-dom';
class AppMenu extends React.Component {
  render() {
    return (
      <div className="app-menu">
        <ul className="nav-list">
          <li className="logo"><Link to="/">Home</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
      </div>
    );
  }
}

export default AppMenu;
