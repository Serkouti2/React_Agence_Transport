import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class SlideNav extends Component {
  
  render() {
    return (
   <div>
  {/* Main Sidebar Container */}
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
   
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <Link to="/" className="d-block">Alexander Pierce</Link>
        </div>
      </div>
     
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
         
          <li className="nav-item">
            <Link to="/clients" className="nav-link">
              <i className="nav-icon fas fa-user" />
              <p>
                Clients
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/reservation" className="nav-link">
              <i className="nav-icon fas fa-calendar" />
              <p>
                Reservations
              </p>
            </Link>
           
          </li>
          <li className="nav-item">
            <Link to="/voyages" className="nav-link">
              <i className="nav-icon fas fa-suitcase-rolling" />
              <p>
                Voyages
              </p>
            </Link>
           
          </li>
          <li className="nav-item">
            <Link to="/activite" className="nav-link">
            <i class="fa-solid "></i>
            <i class="nav-icon bi bi-binoculars"></i>
              <p>
                Activites
              </p>
            </Link>
            
          </li>
          <li className="nav-item">
            <Link to="/vehicule" className="nav-link">
              <i className="nav-icon fas fa-car" />
              <p>
                Vehicules
              </p>
            </Link>
           
          </li>
          <li className="nav-item">
            <Link to="/chauffeur" className="nav-link">
            <i class="nav-icon bi bi-pie-chart"></i> 
              <p>
                Chauffeurs
              </p>
            </Link>
            
          </li>
          
          
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

    )
  }
}

export default SlideNav