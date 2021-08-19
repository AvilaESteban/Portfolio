import React from 'react';
import '../Assets/style.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const SeccionDescuentos = () => {
    return(
        <>
            <div className='style text-center text-light'> 
               <h2 className='p-3'> Conocé nuestras Promociones!!</h2>
           </div> 
        
           <div className='row '>
                <div className='col-md-4 col-sm-12'>
                    <div className='card shadow'>
                        <div className='card-body'>
                            <h6>dia Martes</h6>
                            <Jumbotron fluid>
                              <Container>
                               <h1>Alisados</h1>
                             <p>
                               <strong>2 x 1</strong>
                             </p>
                           </Container>
                           </Jumbotron>
                        </div>
                    </div> 
                </div>
                <div className='col-md-4 col-sm-12'>
                    <div className='card shadow'>
                        <div className='card-body'>
                            <h6>dia Miercoles</h6>
                            <Jumbotron fluid>
                              <Container>
                               <h1>Color</h1>
                             <p>
                               <strong>2x1</strong>
                             </p>
                           </Container>
                           </Jumbotron>
                        </div>
                    </div> 
                </div>
                <div className='col-md-4 col-sm-12'>
                    <div className='card shadow'>
                        <div className='card-body'>
                            <h6>dia Viernes</h6>
                            <Jumbotron fluid>
                              <Container>
                               <h1>Peinados</h1>
                             <p>
                              <strong>2x1</strong>
                             </p>
                           </Container>
                           </Jumbotron>
                        </div>
                    </div> 
                </div>
           </div>

        </>
    );
}

export default SeccionDescuentos;