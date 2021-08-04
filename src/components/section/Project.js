import React from 'react';
import { NavLink } from "react-router-dom";

const Project = () => {
    return(
        <>
         <h1>Project</h1>
         <a> 
         <NavLink
              exact={true}
              className='text-dark'
              to="/project1"
            >
             PROJECT 1
            </NavLink>
         </a>
         <br></br>
         <a> 
         <NavLink
              exact={true}
              className='text-dark'
              to="/project2"
            >
             PROJECT 2
            </NavLink>
         </a>
         <br></br>
         <a> 
         <NavLink
              exact={true}
              className='text-dark'
              to="/project3"
            >
             PROJECT 3
            </NavLink>
         </a>
         <br></br>
         <a> 
         <NavLink
              exact={true}
              className='text-dark'
              to="/project4"
            >
             PROJECT 4
            </NavLink>
         </a>
         <br></br>
         <a> 
         <NavLink
              exact={true}
              className='text-dark'
              to="/project5"
            >
             PROJECT 5
            </NavLink>
         </a>
         <br></br>
         <a> 
         <NavLink
              exact={true}
              className='text-dark'
              to="/project6"
            >
             PROJECT 6
            </NavLink>
         </a>
        </>
    )
}

export default Project;