import React from 'react';
import Card from 'react-bootstrap/Card';


const Frases = (props) => {
    return(
      <>
      <Card className='container text-center w-100 p-5 '>
         <Card.Header>Los Simpsons</Card.Header>
        <Card.Body>
            <div className='d-flex flex-row flex-wrap '>
                <div className=' w-100 p-5'>
                    <img  src={props.personaje.image}  alt={props.personaje.character} ></img>
                </div>
                <div className=' w-100 p-5'>
                  <Card.Title>{props.personaje.character}</Card.Title>     
                  <Card.Text>
                   {props.personaje.quote}
                 </Card.Text>
               </div>
           </div>
        </Card.Body>
      </Card>
      </>
    );
}

export default Frases;