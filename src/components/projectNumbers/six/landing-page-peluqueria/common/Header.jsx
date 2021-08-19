import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import '../Assets/style.css'

const Header = () => {
    return(
      <>
         <Navbar bg="dark" variant=''  expand="lg" className="fixed-top style">
           <h7 className='text-light'>Peluqueria</h7>
           <Navbar.Toggle aria-controls="" />
           <Navbar.Collapse id="">
              <div className='d-flex flex-wrap  '>
              <NavLink
                 exact={true}                                                   
                 to="/project6/inicio" 
                 className='nav-link text-light '
                 activeClassName='active'>
                 Inicio 
             </NavLink>
             <NavLink 
                 exact={true} 
                 to="/project6/principal/galeria"  
                 className='nav-link text-light '
                 activeClassName='active'>
                    Galeria
             </NavLink>
             <NavLink 
                 exact={true} 
                 to="/project6/principal/quienesSomos"  
                 className='nav-link text-light '
                 activeClassName='active'>
                    Quienes Somos
               </NavLink>
              <NavLink 
                 exact={true} 
                 to="/project6/principal/peinados"  
                 className='nav-link text-light '
                 activeClassName='active'>
                     Peinados
              </NavLink>
              <NavLink
                  exact={true} 
                  to="/project6/principal/tips"  
                  className='nav-link text-light '
                  activeClassName='active'>
                      Tips
              </NavLink>
              <NavLink 
                  exact={true} 
                  to="/project6/principal/contacto"  
                  className='nav-link text-light '
                  activeClassName='active'>
                      Contacto
              </NavLink>
             </div>
           </Navbar.Collapse>
         </Navbar>
        </>
    )
}

export default Header;