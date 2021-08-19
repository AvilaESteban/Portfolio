import React, { useState, useEffect } from 'react';
import Episodios from './Episodios';
import Spinner from './Spinner';
import InicioBreaking from './InicioBreaking';
import './breaking.css';

const ApiBreakingBad = () => {
      const [serie, setSerie] = useState({});
      const [cargando, setCargando] = useState(false);

     useEffect(() => {
        fetchApi();
     },[])

     const fetchApi = async () => {
        setCargando(true);
       const response = await fetch('https://breakingbadapi.com/api/character/random');
       const result= await response.json();
       setSerie(result[0])
       setCargando(false);
       console.log(result[0]);
     }

     const mostrarComponentes = (cargando ) ?  <Spinner/> : 
     <Episodios
     serie= {serie}
   />

    return(
       <>
       
         <section className=' fondoBreak '>
           <h1 className='display-1 text-center text-light  p-5  titulo'> Breaking Bad </h1>
            <article className='text-center'>
                <InicioBreaking/>
                  <button  onClick={ () => fetchApi()} class="w-50 text-light  btn btn1">Aqui puedes buscar a tus personajes favoritos</button>
            </article>
            {mostrarComponentes}
          </section>
         <svg className='figura' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#273036" fill-opacity="1" d="M0,224L0,32L288,32L288,288L576,288L576,288L864,288L864,224L1152,224L1152,96L1440,96L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"></path>
</svg>
       </>
    );
}

export default ApiBreakingBad;