import React, { useState, useRef } from 'react';
import Titulo from '../veterinaria/Titulo';
import FormVeterinaria from './FormVeterinaria';
import './veterinaria.css';
import Swal from 'sweetalert2';
import { NavLink } from "react-router-dom";

const Veterinaria = () => {
      const [mascotas,setMascotas] = useState([]);
      const [mascota,setMascota] = useState({
          nombreMascota: '',
          nombreDuenio: '',
          fecha: '',
          hora: '',
          sintomas:''
      });
      const [errors, setErrors] = useState([]);
      const [formValid, setFormValid] = useState(false);
      const myForm = useRef(null);

 const handleSubmit = (e) => {
    e.preventDefault();
    if(mascotas.includes(mascota)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `La cita de ${mascota.nombreMascota} ya ha sido agregada anteriormente`,
            footer: '<a href>Atras?</a>',
            background: 'rgb(0,0,0)',
            background: 'linear-gradient(8deg, rgba(1,5,36,1) 0%, rgba(9,97,121,1) 35%, rgba(0,11,25,1) 30%)',
            timer: 5000
          })
        return;
    }
    console.log(mascota)
    setMascotas([
        ...mascotas,
        mascota
    ])
    }

 const handleInput = (e) => {
      e.preventDefault()
      console.log(e.target.value)
      const input = e.target;

      setMascota({
        ...mascota,
        // [e.target.name] : e.target.value
        [input.name] : input.value
    })
    handleErrors(input);
    }  

    const eliminarCita = (cita) => {
        setMascotas(mascotas.filter(mascota => mascota !== cita));
        if(mascotas.includes(mascota)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `la de cita de ${mascota.nombreMascota} fue eliminada satisfactoriamente `,
                footer: '<a href>Atras?</a>',
                background: 'rgb(0,0,0)',
                background: 'linear-gradient(8deg, rgba(1,5,36,1) 0%, rgba(9,97,121,1) 35%, rgba(0,11,25,1) 30%)',
                timer: 5000
              })
            return;
        }
    }

  const handleErrors = (input) =>  {
      const isValid = input.checkValidity();
      const inputName = input.name;
      if(!isValid && !errors.includes(inputName)) setErrors([...errors,inputName]);
      if(isValid && errors.includes(inputName)) setErrors(errors.filter((error) => error !== inputName));

      setFormValid(myForm.current.checkValidity());
  }
   
  const hasError = (inputName) => errors.includes(inputName);

   const borderStyle = (inputName) => {
       if(Object.keys(mascota).includes(inputName) && !hasError(inputName))
       return 'valid'
       if(Object.keys(mascota).includes(inputName) && hasError(inputName))
       return 'invalid'

       return '';
   }
   
  

    return(
    <div className='body-vet'>
    <Titulo/>
    <FormVeterinaria
         handleInput = {handleInput}
         handleSubmit={handleSubmit}
         hasError={hasError}
         borderStyle={borderStyle}
         myForm={myForm}
         formValid={formValid}
    />
    <section className='container '>
    <div className='d-flex flex-row flex-wrap justify-content-center '>
        {
                   mascotas.length > 0 ? 
                   mascotas.map( (item, index) => (
                       <div key={index} className='  border border-light text-light'>
                        <div  className='card-header  '>
                           <h2 className=' bg-dark text-white text-center '>Cita:</h2>
                        <h6>Nombre De Mascota: <p> {item.nombreMascota} </p> </h6>
                        <h6>Nombre Del Dueño:  <p> {item.nombreDuenio} </p> </h6>
                        <h6 >Fecha : <p>  {item.fecha} </p>  </h6>
                        <h6 >Hora : <p>  {item.hora} </p>  </h6>
                        <h6>Sintomas: <p> {item.sintomas} </p> </h6>
                        <button className='btn btn-danger' onClick={() => eliminarCita(item)}>Delete</button>
                       </div>
                  </div>
                  ) )  
                  : (
                    <div className='container shadow badge-dark  text-center btn-block p-3 my-3'>   
                        <h2 className='display-6 text-light'>No hay citas</h2> 
                    </div>
                 )
        }
    </div>
    </section>
    <NavLink
              exact={true}
              className='text-light'
              to="/project"
            >
              Atras?
            </NavLink>
    </div>
    )
}

export default Veterinaria;