import React, { useState, useEffect } from 'react';
import './clima.css';
import { NavLink } from "react-router-dom";

const Clima = () => {
    const [ clima, setClima] = useState({});
    const [ conversor, setConversor] = useState({});


    const  fecha = new Date()
    const  diaSemana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    const  mes = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    const fechaActual= diaSemana[fecha.getDay()] + ' ' + fecha.getDate() + ' de ' + mes[fecha.getMonth()] + ' del ' + fecha.getFullYear();  
    

    useEffect(()=>{
       consultarApi();
       consultarMonedas();
    },[]);
   
  const consultarApi = async () => {
      const respuesta = await fetch(`http://api.openweathermap.org/data/2.5/find?q=tucuman&q=argentina&units=metric&appid=054dd805e0060ac78e02d0c7f5614548`) 
      const resultado = await respuesta.json();
      console.log(resultado.list[0]);
      setClima(resultado.list[0]);
  }

  const consultarMonedas = async () => {  
    const respuesta = await fetch('https://free.currconv.com/api/v7/convert?q=USD_ARS,EUR_ARS&compact=ultra&apiKey=f9b32090ff7f133a5aed')
      const resultado = await respuesta.json();
      console.log(resultado);
      setConversor(resultado);
  }
    console.log('conversor', conversor);
    const   resultadoConversor1  =  conversor.EUR_ARS  
    const   resultadoConversor2  =  conversor.USD_ARS

    return(
        <>

    <div className='body-clima '>
     <div class="weather-container ">
      <div class="weather-box">
        <div ID="cloudcontainer">
          <div ID="cloudmain">
            <div ID="cloud2"></div>
            <div ID="cloud3"></div>
          </div>
          
        </div>
          <h1 className='my-5 p-2 display-6'> {clima.name} -  {!clima.sys ? '' : clima.sys.country} </h1>
          <h4 className='text-center'> {fechaActual}  </h4> 
         <img src={ `http://openweathermap.org/img/wn/${!clima.weather ? '' :clima.weather[0].icon}@2x.png`} /> 
         
        <div ID="weatherdescboxes">
          <div ID="weatherdesc"><p> {clima.main ===  undefined ? '' : clima.main.temp}°C</p></div>
          <div ID="weatherdesc2">
            <p ID="datedesc">Humidity:  { !clima.main  ? '' : clima.main.humidity} % </p>
            <p ID="datedesc">Description:  {!clima.weather ? '' : clima.weather[0].description}</p>
           </div>
        </div>
        <div className='col-md-4 col-sm-12 shadow w-100 p-2 my-2 text-center'>
               <h7>Valor monedas extranjeras</h7>
               <h5>EURO:  {resultadoConversor1} </h5>
               <h5>DOLAR: {resultadoConversor2}</h5> 
          </div>
      </div>
          
        </div> 
        </div> 
     </>
    )
}

export default Clima;





