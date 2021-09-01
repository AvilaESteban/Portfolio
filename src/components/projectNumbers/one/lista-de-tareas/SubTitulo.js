import React from 'react';

const SubTitulo = (props) => {
    return(
        <>
          <p className='text-center'> Agregar tarea {props.comision}</p>
           <h4 className='text-white text-center'>{props.frase}</h4> 
        </>
    )
}

export default SubTitulo;