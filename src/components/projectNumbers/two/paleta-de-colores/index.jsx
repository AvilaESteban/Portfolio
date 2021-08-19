import React, { useState, useEffect } from 'react';
import ListaColores from './ListaColores'
import Swal from 'sweetalert2';
import { NavLink } from "react-router-dom";

const PaletaColores = () => {
      const [colores, setColores] = useState([]);
      const [color, setColor] = useState('');
      const [inicio,setInicio] =useState(true);

    const  agregarColor = (e) => {
       e.preventDefault();
        if(colores.includes(color)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `El color ${color} ya ha sido agregada anteriormente`,
                footer: '<a href>Atras?</a>',
                background: 'rgb(2,0,36)',
                timer: 5000
              })
            return;
        }
       setColores(
            [  ...colores,
               color
       ])
    }
    
    const eliminarColor = (nombre) => {
        setColores(colores.filter(color => color !== nombre))
        if(colores.includes(color)){
            alert('Color eliminado satisfactoriamente');
            return;
        }
    }

    useEffect(() => {
        if(inicio){
            let coloresGuardados = JSON.parse(localStorage.getItem('listaColores'));
            if(coloresGuardados){
                setColores(coloresGuardados);
            }
            setInicio(false);
        }
        localStorage.setItem('listaColores',JSON.stringify(colores))
    },[color, colores]);

    return(
        <>
        <div className='container text-center'> 
        <div className='p-2 '>
         <form onSubmit={agregarColor} className='form-group text-center' >
           <div className='bg-white w-100 p-2 my-2 text-center'>
               <h1 className='shadow p-2 my-2 display-3 '>Administrar Colores</h1>
                <div className='d-flex p-2 my-2  shadow'>
                    <div className=' w-50'
                        style={{
                            backgroundColor:color
                        }}
                    />
                    <input
                       className='form-control w-50 p-5 my-2'
                       type='text'
                       placeholder='Ingrese un color,ej: Blue'
                       name='color'
                       onChange={(e) => setColor(e.target.value)}
                       value={color}
                    />
                </div>
                <button type='submit' className='btn btn-primary p-2 my-2 shadow'>Guardar</button>
             </div>
            </form>
            </div>
             <section >
                <ListaColores
                    colores = {colores}
                    eliminarColor = {eliminarColor}
                />
             </section>
             <NavLink
              exact={true}
              className='text-light'
              to="/project"
            >
              Atras?
            </NavLink>
             </div>
        </>
    )
}

export default PaletaColores;