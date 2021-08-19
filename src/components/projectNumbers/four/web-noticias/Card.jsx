import React from 'react';
import Img from '../web-noticias/Img/imgNoticia1.jpg';
import Card from 'react-bootstrap/Card';

const CardNoticia = () => {
   return(
       <>
          <Card className="container text-center bg-dark text-white ">
            <Card.Img src={Img}  alt='1' />
            <Card.ImgOverlay>
              <Card.Title className='p-5 text-dark display-1'> Telemundo Noticias</Card.Title>
              <Card.Text > 
                <h5 className=' display-6 p-5 '> 24hs - Emisión Central desde Argentina</h5>
                <h1>#QuedateEnCasa</h1>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
       </>
   )
}

export default CardNoticia;