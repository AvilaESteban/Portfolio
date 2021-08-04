import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {  
    return(
        <>
           {/* <!-- navbar_section_start --> */}
  <nav class="navbar navbar-expand-lg navbar-dark navbar-container">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"> </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" >
            <NavLink
              exact={true}
              className='text-light '
              to="/home"
            >
              HOME
            </NavLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" >
            <NavLink
              exact={true}
              className='text-light'
              to="/about"
            >
              ABOUT
            </NavLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" >
            <NavLink
              exact={true}
              className='text-light'
              to="/education"
            >
              EDUCATION
            </NavLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" >
            <NavLink
              exact={true}
              className='text-light'
              to="/project"
            >
             PROJECT
            </NavLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" >
            <NavLink
              exact={true}
              className='text-light'
              to="/contact"
            >
              CONTACT
            </NavLink>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
        </>
    );
}

 export default Header;