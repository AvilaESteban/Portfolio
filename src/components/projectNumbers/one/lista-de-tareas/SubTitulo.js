import React from 'react';

const SubTitulo = (props) => {
    return(
        <>
          <p> Agregar tarea {props.comision}</p>
           <h4 className='text-white '>{props.frase}</h4> 
        </>
    )
}

export default SubTitulo;