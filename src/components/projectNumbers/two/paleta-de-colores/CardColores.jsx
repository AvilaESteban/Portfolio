import React from 'react';

const CardColores = (props) => {
    return(
       <>
            <div className="card  my-2 shadow text-center">
                 <div className="card-header shadow">
                  {props.color}
                 </div>
            <div className="card-body p-5 my-2"  
                    style={{
                        backgroundColor: props.color
                    }}
                    > </div>   
              <div className='card-footer'>
                 <button onClick={() => {props.eliminarColor(props.color)}}  className='btn btn-danger'>Delete</button>
              </div>
            </div>
       </>
    )
}

export default CardColores;

