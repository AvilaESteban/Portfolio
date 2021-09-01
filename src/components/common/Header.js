import React from 'react';
import './header.css';
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {  
    return(
        <>
        <Navbar bg="dark" variant="" expand="sm" >
       
		<div class="platzi-titulo">Portfolio</div>
         
        <Navbar.Toggle aria-controls="" />
        <Navbar.Collapse id="">
  
        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" >
            <NavLink
              exact={true}
              className='text-light '
              to="/"
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
        </Navbar.Collapse>
   </Navbar> 
        </>
    );
}

 export default Header;