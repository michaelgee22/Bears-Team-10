import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/" className="header-title">
          <h1>Bears 10 Project</h1>
        </Link>

        <ul className="nav-links">
          <li><Link to="/map" className="nav-link">Map</Link></li>
          <li><Link to="/pictureoftheday" className="nav-link">POTD</Link></li>
          <li><Link to="/spacex" className="nav-link">Space X</Link></li>
          <li><Link to="/stack-exchange" className="nav-link">Stack Exchange</Link></li>
        </ul>

        <div className="menu-btn">BTN</div>
      </div>
    );
  }
}

export default Header;
