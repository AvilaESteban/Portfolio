import React from 'react';
import { NavLink } from "react-router-dom";
import './project.css';

const Project = () => {
    return(
        <>
             {/* ---------------------- */}
 <h1 className="display-2 my-2 text-center text-dark"> Projects</h1>
 <div className="portfolio ">
  <a href="/project1" className="card-proj">
    <div className="content-proj">
      <span className="title-proj">Project 1 </span>
      <span className="category-proj">Lista de Tareas </span>
    </div>
    <div >
      <img className="foto-cody" src="https://images.unsplash.com/photo-1606327054629-64c8b0fd6e4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
      
    </div>
  </a>
  

  <a href="/project2" className="card-proj">
    <div className="content-proj">
      <span className="title-proj">Project 2</span>
      <span className="category-proj"> Paleta de colores</span>
    </div>
    <div >
      <img className="foto-cody" src="https://images.unsplash.com/photo-1502691876148-a84978e59af8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBhbGV0YSUyMGNvbG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
    </div>
  </a>

  <a href="/project3" className="card-proj">
    <div className="content-proj">
      <span className="title-proj">Project 3</span>
      <span className="category-proj">Frases Simpsons (Api)</span>
    </div>
    <div >
      <img className="foto-cody" src="https://images.unsplash.com/photo-1604287094096-59a7dee979e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
    </div>
  </a>

  <a href="/project4" className="card-proj">
    <div className="content-proj">
      <span className="title-proj">Project 4</span>
      <span className="category-proj">Web Noticias (Api)</span>
    </div>
    <div >
      <img className="foto-cody" src="https://images.unsplash.com/photo-1529579134665-75dfc9c5ccef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
    </div>
  </a>

  <a href="/project5" className="card-proj">
    <div className="content-proj">
      <span className="title-proj">Project 5</span>
      <span className="category-proj">Citas Veterinaria</span>
    </div>
    <div >
      <img className="foto-cody" src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
    </div>
  </a>

  <a href="/project6" className="card-proj">
    <div className="content-proj">
      <span className="title-proj">Project 6</span>
      <span className="category-proj">Landing Page Peluqueria</span>
    </div>
    <div >
      <img className="foto-cody" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwzMTQwMDg3Nnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
    </div>
  </a>

  <a href="/project7" className="card-proj">
    <div className="content-proj">
      <span className="title-proj">Project 7</span>
      <span className="category-proj"> Clima (Api)</span>
    </div>
    <div >
      <img className="foto-cody" src="https://images.unsplash.com/photo-1578773753365-05209f894080?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c29sfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
    </div>
  </a>

  <a href="/project8" className="card-proj">
    <div className="content-proj">
      <span className="title-proj">Project 8</span>
      <span className="category-proj"> Cafeteria (Crud Basico)</span>
    </div>
    <div >
      <img className="foto-cody" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FmZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
    </div>
  </a>

  <a href="/project9" className="card-proj">
    <div className="content-proj">
      <span className="title-proj">Project 9</span>
      <span className="category-proj"> Verano FrontEnd Cody</span>
    </div>
    <div >
      <img className="foto-cody" src="https://images.unsplash.com/photo-1525968635328-37e2ce22d2d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
    </div>
  </a>

  <a href="/project10" className="card-proj">
    <div className="content-proj">
      <span className="title-proj">Project 10</span>
      <span className="category-proj">Homenaje
      Gustavo Ceratti</span>
    </div>
    <div >
      <img className="foto-cody" src="https://images.unsplash.com/photo-1557787163-1635e2efb160?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uY2VydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
    </div>
  </a>

  <a href="/project11" className="card-proj">
    <div className="content-proj">
      <span className="title-proj">Project 11</span>
      <span className="category-proj">BreakingBad (Api)</span>
    </div>
    <div >
      <img className="foto-cody" src="https://images.unsplash.com/photo-1504954031449-8b5810eee2e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
    </div>
  </a>

  <a href="/project12" className="card-proj">
    <div className="content-proj">
      <span className="title-proj">Project 12</span>
      <span className="category-proj">Empleados (Crud Basico)</span>
    </div>
    <div >
      <img className="foto-cody" src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
    </div>
  </a>
  
</div>
        <h1  className="display-6 p-2 text-center text-dark">thank you very much for seeing my projects</h1>
        </>
    )
}

export default Project;