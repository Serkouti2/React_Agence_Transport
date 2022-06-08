import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
    <div>
  {/* Navbar */}
  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
      </li>
     
    </ul>
    {/* Right navbar links */}
   
  </nav>
  {/* /.navbar */}
</div>

    )
  }
}

export default Header