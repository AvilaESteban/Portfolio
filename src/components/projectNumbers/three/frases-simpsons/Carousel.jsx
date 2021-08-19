import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Img from '../frases-simpsons/img/img1.png';
import Img2 from '../frases-simpsons/img/img2.png';
import Img3 from '../frases-simpsons/img/img3.jpg';
import Img5 from '../frases-simpsons/img/img5.png';
import Img6 from '../frases-simpsons/img/img6.png';
import Img7 from '../frases-simpsons/img/img7.jpg';
import Img4 from '../frases-simpsons/img/img4.jpg';
import Img8 from '../frases-simpsons/img/img8.png';
import Img9 from '../frases-simpsons/img/img9.jpg';
import Img10 from '../frases-simpsons/img/img10.jpg';
import Img11 from '../frases-simpsons/img/img11.jpg';
import Img12 from '../frases-simpsons/img/img12.png';
import './Spinner.css';

const CarouselSimps = () => {
    return( 
        <div className='carrusel'>
<Carousel >
  <Carousel.Item>
    <div className=' d-flex flex-row aling-item-center w-100 h-100'>
    <Card>
    <img src={Img} alt='1'></img>
    </Card>
    <Card>
    <img src={Img4} alt='4'></img>
    </Card>
    <Card>
    <img src={Img3} alt='3'></img>
    </Card>
    <Card>
     <img src={Img5} alt='5'></img>
    </Card>
    <Card>
    <img src={Img8} alt='8'></img>
    </Card>
    <Card>
    <img src={Img9} alt='9'></img>
    </Card>
    </div>
   
  </Carousel.Item>
  <Carousel.Item>
     <div  className=' d-flex flex-row w-100 h-100'>
       <Card>
          <img src={Img2} alt='2'></img>
        </Card>
        <Card>
          <img src={Img6} alt='6'></img>
         </Card>
         <Card>
           <img src={Img5} alt='5'></img>
         </Card>
         <Card>
           <img src={Img} alt='1'></img>
         </Card>
         <Card>
         <img src={Img12} alt='12'></img>
        </Card>
        <Card>
         <img src={Img10} alt='10'></img>
       </Card>
     </div>
   
  </Carousel.Item>
  <Carousel.Item>
     <div  className=' d-flex flex-row  w-100 h-100'>
       <Card>
          <img  src={Img8} alt='8' ></img>
        </Card>
        <Card>
          <img src={Img3} alt='3'></img>
        </Card>
        <Card>
          <img src={Img12} alt='12'></img>
        </Card>
        <Card>
         <img src={Img7} alt='7'></img>
        </Card>
        <Card>
           <img src={Img2} alt='2'></img>
         </Card>
         <Card>
          <img src={Img11} alt='11'></img>
       </Card>
     </div>
    
  </Carousel.Item>
</Carousel>
        </div>
    );
}

export default CarouselSimps;