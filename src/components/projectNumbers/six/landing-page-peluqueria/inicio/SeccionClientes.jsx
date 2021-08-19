import React from 'react';
import '../Assets/style.css';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import Peinado2 from '../Assets/img/peinados/peinado2.jpg';
import Peinado4 from '../Assets/img/peinados/peinado4.jpg';
import Color3 from '../Assets/img/color/color3.jpg';
import Corto2 from '../Assets/img/cortos/corto2.jpg';

const SeccionClientes = ({toggleShowA,toggleShowB,toggleShowC,toggleShowD,showA,showB,showC,showD}) => {
    return(
        <>
              <div className='style text-center text-light p-3'> 
               <h2 className='p-3'>Comentarios de nuestros clientes</h2>
           </div>
           <div className='container'>
              <div className='row text-center my-3 p-3 '>
                  <div className='col-xl-6 col-md-6 col-sm-12 '>
                    <Button onClick={toggleShowA} variant="outline-dark" className='w-100'>
                       Juanita
                   </Button>
                  </div>
                  <div className='col-xl-6 col-md-6 col-sm-12 w-100'>
                     <Toast show={showA} onClose={toggleShowA}>
                      <Toast.Header>
                         <strong className="mr-auto">Juanita Viale</strong>
                         <small>12 de octubre del 2020</small>
                     </Toast.Header>
                     <Toast.Body>Woohoo, Me encantó mi nuevo Look!</Toast.Body>
                     <img src={Color3} alt='color' className='peinados'/>
                   </Toast>
                  </div>
              </div>
              <div className='row text-center my-3 p-3 '>
                  <div className='col-xl-6 col-md-6 col-sm-12 '>
                    <Button onClick={toggleShowB} variant="outline-dark" className="w-100">
                       Margarita
                   </Button>
                  </div>
                  <div className='col-xl-6 col-md-6 col-sm-12 w-100 '>
                  <Toast onClose={toggleShowB} show={showB} animation={false}>
                   <Toast.Header>
                     <strong className="mr-auto">Margarita Diaz</strong>
                     <small>01 de abril del 2020</small>
                    </Toast.Header>
                   <Toast.Body>Feliz.! Gracias chicas por dejarme siempre como una  reina..</Toast.Body>
                    <img src={Corto2} alt='color' className='peinados'/>
                 </Toast>
                  </div>
              </div>
              <div className='row text-center my-3 p-3'>
                  <div className='col-xl-6 col-md-6 col-sm-12 '>
                  <Button onClick={toggleShowC} variant="outline-dark" className=" w-100">
                     Marion
                 </Button>
                  </div>
                  <div className='col-xl-6 col-md-6 col-sm-12 w-100 '>
                  <Toast show={showC} onClose={toggleShowC}>
                   <Toast.Header>
                      <strong className="mr-auto"> Marion Gonzalez</strong>
                      <small>24 de mayo del 2020</small>
                   </Toast.Header>
                   <Toast.Body> Hermoso el trato con sus clientas.! Sigan asi chicas.!!</Toast.Body>
                     <img src={Peinado2} alt='color' className='peinados'/>
                   </Toast>
                  </div>
              </div>
              <div className='row text-center my-3 p-3 '>
                  <div className='col-xl-6 col-md-6 col-sm-12 '>
                  <Button onClick={toggleShowD} variant="outline-dark" className="w-100 ">
                      Susana
                 </Button>
                  </div>
                  <div className='col-xl-6 col-md-6 col-sm-12 w-100 '>
                  <Toast onClose={toggleShowD} show={showD} animation={false}>
                   <Toast.Header>
                     <strong className="mr-auto">Susana LaTorre </strong>
                     <small>15 de octubre del 2020</small>
                    </Toast.Header>
                   <Toast.Body>Encantada de poder ir al mejor salon de belleza, por muchos años más..</Toast.Body>
                    <img src={Peinado4} alt='color' className='peinados'/>
                 </Toast>
                  </div>
              </div>
           </div>
        </>
    );
}

export default SeccionClientes;