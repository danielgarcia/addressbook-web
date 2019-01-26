import * as React from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component {
  render() {
    return (
      <header>
        <div>
          <div className="logo"><Link to="/">Rentiso</Link></div>
          <ul className="top-menu"></ul>
        </div>
      </header>
    );
  }
}

export default Header ;
