import React from 'react';
import Img1 from './images/1.jpg';
import Img2 from './images/2.jpg';
import Img3 from './images/3.jpg';
import Img4 from './images/4.jpg';
import Img5 from './images/5.jpg';
import Img6 from './images/6.jpg';

const Galeria = () => {
    return(
        <>

        <div className=' body-gal'>  
            {/* <!-- Navbar--> */}
             <div class="navBar-cody">
              <nav class="nav-n">
                <ul class="ul-n text-start my-2">
                  <li class="li-n text-dark"> #CODY</li>
                  <li class="li-n"><a class="a-n" href='/project9/inicio'>INICIO </a></li>
                  <li class="li-n"><a class="a-n" href='/project9/galeria'>GALERIA </a></li>
                </ul>
              </nav>
            </div>
  <main>
    <div>
     <br></br>
      <br></br>
     <h1 class="display-3 p-5  text-dark text-center">Galería completa de mis vacaciones</h1>
     
    </div>
    <div class="main-gal">
      <div class="box-gal">
        <img src={Img1} alt=""/>
        <div class="details-gal">
          <h4 class="text-light"> Cody en la playa</h4>
        </div>
      </div>

      <div class="box-gal">
        <img src={Img2} alt=""/>
        <div class="details-gal">
          <h4 class="text-light">Cody acampando</h4>
        </div>
      </div>

      <div class="box-gal">
        <img src={Img3} alt=""/>
        <div class="details-gal">
          <h4 class="text-light">Cody en una alberca</h4>
        </div>
      </div>
    </div>

    {/* <!-- ------------------------------------------ --> */}
    <div class="main-gal ">
      <div class="box-gal">
        <img src={Img4} alt=""/>
        <div class="details-gal">
          <h4 class="text-light">Cody tomando sol</h4>
        </div>
      </div>

      <div class="box-gal">
        <img src={Img5} alt=""/>
        <div class="details-gal">
          <h4 class="text-light">Cody paseando</h4>
        </div>
      </div>

      <div class="box-gal">
        <img src={Img6} alt=""/>
        <div class="details-gal">
          <h4 class="text-light">Cody en una alberca</h4>
        </div>
      </div>
    </div>
  </main>
    {/* <!-- Footer --> */}
  <div class="footer ">
    <div class="main-container">
      <div class="brand-name">
        <p class="text-center p-2 text-dark"> #ConcursoVeranoFrontend  -  Codigo Facilito - proyecto para Mexico - 2021.</p>
      </div>
    </div>
  </div>
             
           </div>  
        </>
    )
}

export default Galeria;