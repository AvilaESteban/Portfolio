import React from 'react';
import '../Assets/style.css';
import Corto1 from '../Assets/img/cortos/corto1.jpg';
import Corto2 from '../Assets/img/cortos/corto2.jpg';
import Corto3 from '../Assets/img/cortos/corto3.jpg';
import Corto4 from '../Assets/img/cortos/corto4.jpg';

const SeccionCortos = () => {
    return(
        <> 
            <div className='style text-center text-light'> 
               <h2 className='p-4'>Cortes cortos y cool.!!</h2>
           </div> 
           <div className=' p-2 my-2 '>
             <div className='row p-5'>
                 <div className='col-xl-3 col-md-6 col-sm-12'>
                     <img src={Corto1} alt='color' className='peinados'/>
                 </div>
                 <div className='col-xl-3 col-md-6 col-sm-12'>
                     <img src={Corto2} alt='color' className='peinados' />
                 </div>
                 <div className='col-xl-3 col-md-6 col-sm-12'>
                   <img src={Corto3} alt='color' className='peinados'/>
                 </div>
                 <div className='col-xl-3 col-md-6 col-sm-12'>
                    <img src={Corto4} alt='color' className='peinados'/>
                 </div>
              </div>
            </div>
        </>
    );
}

export default SeccionCortos;