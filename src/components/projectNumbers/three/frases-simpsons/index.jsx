import React, { useState,useEffect } from 'react';
import Img from '../frases-simpsons/img/logo.png';
import Button from 'react-bootstrap/Button';
import NavSimpsons from './Navbar';
import Frases from './Frases';
import CarouselSimps from './Carousel';
import Spinner from './Spinner';
import { NavLink } from "react-router-dom";

const ApiSimpsons = () => {
      //state
      const [personaje, setPersonaje] = useState({});
      const [cargando, setCargando] = useState(false);

      useEffect(()=>{
            consultarApi()
      },[])

      const consultarApi = async () => {
          setCargando(true);
          const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
          const result = await respuesta.json()
          console.log(result)
          
          setTimeout(() => {
            setPersonaje(result[0]);
            setCargando(false);
          }, 2000);
         }
     
      const mostrarComponentes = (cargando) ?  <Spinner/> : 
       <Frases
        personaje ={personaje}
       />

    return(
       <>
        <NavSimpsons/>
        <CarouselSimps/>
        <section className='container  text-center my-2'>
            <article className=''>
                <img className='w-75 ' src={Img} alt={1}  />
                <Button
                   className='w-50 my-5 shadow'
                   variant='warning'
                   onClick={ () => consultarApi()}
                > Obtener Frases</Button>
            </article>
            {mostrarComponentes}
            
            
        </section>
        <NavLink
              exact={true}
              className='text-light'
              to="/project"
            >
              Atras?
            </NavLink>
         <footer className='bg-warning'>Derechos reservados @LosSimpsons</footer>

       </>
    );
}

export default ApiSimpsons;


