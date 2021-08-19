import React from 'react';
import '../Assets/style.css';
import Color1 from '../Assets/img/color/color1.jpg';
import Color2 from '../Assets/img/color/color2.jpg';
import Color3 from '../Assets/img/color/color3.jpg';
import Color4 from '../Assets/img/color/color4.jpg';

const SeccionColor = () => {
    return(
        <>
           <div className='style text-center text-light '> 
               <h2 className='p-4'>Colores Super Divertidos </h2>
           </div> 
           <div className=' p-2 my-2 '>
             <div className='row p-5'>
                 <div className='col-xl-3 col-md-6 col-sm-12'>
                     <img src={Color1} alt='color' className='peinados'/>
                 </div>
                 <div className='col-xl-3 col-md-6 col-sm-12'>
                     <img src={Color2} alt='color' className='peinados' />
                 </div>
                 <div className='col-xl-3 col-md-6 col-sm-12'>
                   <img src={Color3} alt='color' className='peinados'/>
                 </div>
                 <div className='col-xl-3 col-md-6 col-sm-12'>
                    <img src={Color4} alt='color' className='peinados'/>
                 </div>
              </div>
            </div>
        </>
    );
}

export default SeccionColor;