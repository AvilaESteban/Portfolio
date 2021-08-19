import React from 'react';
import '../Assets/style.css'
import Img1 from '../Assets/img/peluqueria/pelu7.jpg';
import Img2 from '../Assets/img/peluqueria/pelu5.jpg';
import Img3 from '../Assets/img/peluqueria/pelu8.jpg';
import Img4 from '../Assets/img/peluqueria/pelu9.jpg';

const QuienesSomos = () => {
    return(
        <div >
           <div className='imgQuienesSomos' >
             <div className='row'>
             <div className='col-md-6 col-sm-12'>

             </div>
             <div className='col-md-6 col-sm-12 p-5 my-5' >
                 <h1 className='text-light'>Nuestra Historia</h1>
                 <h1 className='text-light text-center'>Nuestra Profesión</h1>
                 <h1 className='text-light'>Nuestro Trabajo</h1>
                 <img  src={Img1} alt='imagen' className='pelu7'/>
             </div>
             </div>
          </div>
          
          <div className='style'>
              <h1 className='text-center text-light  p-3'>Quienes Somos ?</h1>
          </div>

          <div className='my-3 p-5 '>
              <div className='row'>
                  <div className='col-md-6 col-sm-12'>
                      <div className='card'>
                          <div className='card-header'>
                          <h1 className='text-center text-dark titulo'>Nuestra Historia</h1>
                          </div>
                           <div className='card-body '>
                               <p className='justify'>Somos un grupo de profesionales altamente capacitados para cumplir con el rol que desempeñamos desde hace más de 10 años. Por tal motivo, dia a dia seguimos capacitándonos para darles la mejor atención a nuestros clientes.</p>
                                <p>El 09 de  enero del año 2008, inaugurabamos nuestro primer salón de belleza en  San Miguel de  Tucumán, en el centro de la  capital  tucumana, era un dia de verano muy calido, con muchas gentes paseando por el lugar, lo cual, ayudo a que el dia de la inauguración fuera uno de los recuerdo mas memorables. </p>
                                <p>A partir de ese dia, abrimos nuestro  salón de forma consecutiva, creciendo y mejorando  para  bienestar de cada cliente..</p>
                           </div>
                      </div>
                  </div>
                  <div className='col-md-6 col-sm-12'>
                      <div className='card'>
                        <img  src={Img2} alt='imagen' className=''/>
                      </div>
                  </div>
              </div>
          </div>
        
          <div className='my-3 p-5 style '>
              <div className='row'>
                  <div className='col-md-6 col-sm-12'>
                  <div className='card'>
                        <img  src={Img3} alt='imagen' className=''/>
                      </div>
                  </div>
                  <div className='col-md-6 col-sm-12'>
                  <div className='card'>
                          <div className='card-header '>
                          <h1 className='text-center text-dark titulo'>Nuestra Profesión</h1>
                          </div>
                           <div className='card-body '>
                               <p className='justify'>Somos un grupo de profesionales altamente capacitados para cumplir con el rol que desempeñamos desde hace más de 10 años. Por tal motivo, dia a dia seguimos capacitándonos para darles la mejor atención a nuestros clientes.</p>
                                <p>El 09 de  enero del año 2008, inaugurabamos nuestro primer salón de belleza en  San Miguel de  Tucumán, en el centro de la  capital  tucumana, era un dia de verano muy calido, con muchas gentes paseando por el lugar, lo cual, ayudo a que el dia de la inauguración fuera uno de los recuerdo mas memorables. </p>
                                <p>A partir de ese dia, abrimos nuestro  salón de forma consecutiva, creciendo y mejorando  para  bienestar de cada cliente..</p>
                           </div>
                      </div>
                  </div>
              </div>
          </div>
           
          <div className='my-3 p-5 '>
              <div className='row'>
                  <div className='col-md-6 col-sm-12'>
                      <div className='card'>
                          <div className='card-header '>
                          <h1 className='text-center text-dark titulo'>Nuestra Trabajo</h1>
                          </div>
                           <div className='card-body '>
                               <p className='justify'>Somos un grupo de profesionales altamente capacitados para cumplir con el rol que desempeñamos desde hace más de 10 años. Por tal motivo, dia a dia seguimos capacitándonos para darles la mejor atención a nuestros clientes.</p>
                                <p>El 09 de  enero del año 2008, inaugurabamos nuestro primer salón de belleza en  San Miguel de  Tucumán, en el centro de la  capital  tucumana, era un dia de verano muy calido, con muchas gentes paseando por el lugar, lo cual, ayudo a que el dia de la inauguración fuera uno de los recuerdo mas memorables. </p>
                                <p>A partir de ese dia, abrimos nuestro  salón de forma consecutiva, creciendo y mejorando  para  bienestar de cada cliente..</p>
                           </div>
                      </div>
                  </div>
                  <div className='col-md-6 col-sm-12'>
                      <div className='card'>
                        <img  src={Img4} alt='imagen' className=''/>
                      </div>
                  </div>
              </div>
          </div>

        </div>
    )
}

export default QuienesSomos;