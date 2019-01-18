import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './LeftMenu.scss';

class LeftMenu extends React.Component {
  render() {
    return (
      <ul className="left-menu">
        <li><NavLink exact to="/">Dashboard</NavLink></li>
        <li><NavLink to="/properties">Properties</NavLink></li>
        <li><NavLink to="/contacts">Contacts</NavLink></li>
      </ul>
    );
  }
}

export default LeftMenu;
