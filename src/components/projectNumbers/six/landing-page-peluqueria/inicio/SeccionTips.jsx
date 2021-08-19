import React from 'react';
import Tips1 from '../Assets/img/tips/tips1.jpg';
import Tips2 from '../Assets/img/tips/tips2.jpg';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const SeccionTips = () => {
    return(
        <>
            <div className=' style text-center text-light '> 
               <h2 className='p-4'>Tips</h2>
           </div>
           <Container>
           <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header className='btn btn-outline'>
                    <Accordion.Toggle as={Button} variant="outline-dark" eventKey="0">
                           1
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                       <div className='row'>
                        <div className='col-xl-6 col-md-12  col-sm-12'>
                          <img src={Tips1} alt='tips' className='text-center w-100'/>
                        </div>
                         <div className='col-xl-6 col-md-12  col-sm-12'>
                            <Jumbotron className='jumbotrom '>
                              <Container>
                               <h1 className='text-dark'>Peluqueria's</h1>
                             <p  className='text-dark'>
                               <strong>Tu mejor opción.!!</strong>
                             </p>
                           </Container>
                           </Jumbotron>
                         </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                 <Card>
                 <Card.Header className='btn btn-outline'>
                   <Accordion.Toggle as={Button} variant="outline-dark" eventKey="1">
                       2
                   </Accordion.Toggle>
                 </Card.Header>
                 <Accordion.Collapse eventKey="1">
                   <Card.Body>
                    <div className='row'>
                        <div className='col-xl-6 col-md-12  col-sm-12'>
                          <Jumbotron className='jumbotrom '>
                              <Container>
                               <h1 className='text-dark'>Peluqueria's</h1>
                             <p  className='text-dark'>
                               <strong>Tu mejor opción.!!</strong>
                             </p>
                           </Container>
                           </Jumbotron>
                        </div>
                         <div className='col-xl-6 col-md-12  col-sm-12'>
                            <img src={Tips2} alt='tips' className='text-center w-100'/>
                         </div>
                      </div>
                   </Card.Body>
                 </Accordion.Collapse>
               </Card>
             </Accordion>
         </Container>
        </>
    );
}

export default SeccionTips;