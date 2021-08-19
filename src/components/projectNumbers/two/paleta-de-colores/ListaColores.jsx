import React from 'react';
import CardColores from './CardColores';

const ListaColores = (props) => {
    return(
        <>
        <div className='d-flex flex-wrap justify-content-center w-100 '>
           {
             props.colores.map((color,index)=> (
                 <CardColores
                     color={color}
                     key={index}
                     eliminarColor ={props.eliminarColor}
                 />
             ))
           }
        </div>
        </>
    )
}

export default ListaColores;