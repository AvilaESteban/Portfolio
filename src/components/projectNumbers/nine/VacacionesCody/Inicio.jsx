import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import  {NavLink}  from "react-router-dom";
import './vacacionesCody.css';
import Icon1 from './images/icon1.png';
import Icon2 from './images/icon2.png'; 
import Icon3 from './images/icon3.png';
import Icon4 from './images/icon4.png';
import Icon5 from './images/icon5.png';
import Icon6 from './images/icon6.png';
 import Html from './images/html.png';
 import Css from './images/css.png';
 import Flex from './images/flexbox.png';
 import Grid from './images/grid.png';
 import Ajax from './images/ajax.png';
 import Jav from './images/javascript.png';
import Img1 from './images/1.jpg';
import Img2 from './images/2.jpg';
import Img3 from './images/3.jpg';
import Img4 from './images/4.jpg';
import Img5 from './images/5.jpg';
import Img6 from './images/6.jpg';



const VacacionesCody = () => {
   

    return(
        <>
          <body class=" ">
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
              <br></br>
               {/* <!-- presentacion --> */}
                <div class="jumbotron jumbotron-fluid">
                  <div class="container">
                    <br></br>
                    <h1 class="h1-cody display-1 ">Soy Cody</h1>
                    <p class="lead"> un aspirante a Dev, en 2019, organicé un viaje para desestresarme del código, y en esta página
                      quiero compartirlo contigo. </p>
                  </div>
                </div>
                {/* <!-- card con efectos --> */}
                 <section class="1 curso">
                   <section class="parallax">
                     <div class="parallax-inner">
                       <br></br>
                       <div class="box-wrapper">
                         <div class="card-cody">
                           <div class="img-box">
                             <h2 class='h2-cody text-dark p-3'>Estas son mis Vacaciones</h2>
                           </div>
                           <h2 class="h2-cody text-dark">#VeranoFrontend</h2>
                         </div>
                       </div>
                       <br></br>
                     </div>
                   </section>
                     {/* <!-- seccion: fotos de mis vacaciones --> */}
                    <section>
                      <h1 class="p-5 text-center display-5 ">¡Bien! Sé que estás aquí por mis vacaciones, aquí te comparto algunas fotos que tomé:</h1>
                      <h4 class=" text-center ">Aquí te comparto algunas fotos de mis vacaciones.!! 
                      </h4><br></br>
                    </section>

                      {/* <!-- comienza carrusel de fotos --> */}
                          <div className='carrusel container text-center'>
                            <Carousel >
                              <Carousel.Item>
                                <div className=' d-flex flex-row aling-item-center w-100 h-100'>
                                <Card>
                                <img src={Img1} alt='1'></img>
                                </Card>
                                <Card>
                                <img src={Img2} alt='4'></img>
                                </Card>
                                </div>
   
                                </Carousel.Item>
                                <Carousel.Item>
                                   <div  className=' d-flex flex-row w-100 h-100'>
                                     <Card>
                                        <img src={Img3} alt='2'></img>
                                      </Card>
                                      <Card>
                                        <img src={Img4} alt='6'></img>
                                       </Card>
                                   </div>
   
                                    </Carousel.Item>
                                    <Carousel.Item>
                                       <div  className=' d-flex flex-row  w-100 h-100'>
                                         <Card>
                                            <img  src={Img5} alt='8' ></img>
                                          </Card>
                                          <Card>
                                            <img src={Img6} alt='3'></img>
                                          </Card>
                                       </div>
    
                                    </Carousel.Item>
                                  </Carousel>
                               </div>
    
            <section>
             <h4 class=" text-center "> Puedes ver más, en la galería de fotos de  mi    página 
                 <br></br><a  
               class="btn-outline-dark text-light text-center "  href="/project9/galeria">Ir a la galería</a> 
             </h4>
             
           </section>
           <section class="parallax-1">
             <div class="parallax-inner">
               <br></br>
             </div>
           </section>
              {/* <!-- seccion: Mis vacaciones frontend --> */}
    <section class="2 curso">
      <h1 class="display-1 text-center p-5 ">Mis vacaciones Frontend</h1><br></br>
      <ul class="card-wrapper-v p-2">
        <li class="card-v curso">
          <img className='img-cody'
            src="https://images.unsplash.com/photo-1581710862235-eb6e05d8783f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""/>
          <h3 className='h3-cody'>Durante el verano de 2019, decidí comenzar a aprender desarrollo frontend </h3>
        </li>
        <li class="card-v curso">
          <img className='img-cody'
            src="https://images.unsplash.com/photo-1607784042611-39ac8ee022ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=358&q=80"
            alt=""/>
          <h3 className='h3-cody'> Por lo que durante mi viaje, estuve aprendiendo HTML, CSS, y JavaScript </h3>
        </li>
        <li class="card-v curso">
          <img className='img-cody'
            src="https://images.unsplash.com/photo-1460552181709-52ca8cb46336?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHBsYXlhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""/>
          <h3 className='h3-cody'>Cada tarde, después de conocer nuevos lugares en mis vacaciones, practicaba mis habilidades en tecnologías
            frontend, construyendo esta página </h3>
        </li>
      </ul>
     </section>
  {/* <!-- seccion: cursos que estuve tomando --> */}
      <section class="text-center  p-4 ">
        <h1 class="display-5 h1-b"> Estos son los cursos que estuve tomando : </h1><br></br>
        <div class="grid text-center">
          <div class="field">
            <button class="but10"><b> Curso profesional de Desarrollo Web </b></button><br></br><br></br> <br></br>
            <button class="but10"> <b> Curso para crear mi primera página web</b></button>
          </div>
        </div>
      </section>
           {/* <!-- seccion ruta de aprendizaje --> */}
      <section class="parallax-2 ">
        <div class="parallax-inner text-center">
          <br></br>
          <h1 class="text-center display-5"> Ruta de aprendizaje 2021 </h1>
          <p> También me propuse aprender nuevas tecnologías durante 2021</p>
          <br></br>
          
          {/* ------------------ */}
          <div className='container  rutaAprend'>
          <div className='row'>
             <div className='col-md-4 col-sm-12'>
                  <div class="flip-cody flip-vertical-cody">
            <div class="front-cody">
            <img className='img-cody'
            src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/>
              <h1 class="text-shadow text-light">HTML </h1>
            </div>
            <div class="back-cody">
              <img class="imag" src={Html} alt="icon1"/>
              <h4 class="text-shadow">HTML </h4>
            </div>
          </div>
             </div>
                 
             <div className='col-md-4 col-sm-12'>
                 <div class="flip-cody flip-vertical-cody">
            <div class="front-cody">
            <img className='img-cody'
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
              <h1 class="text-shadow text-light">CSS </h1>
            </div>
            <div class="back-cody">
              <img class="imag" src={Css} alt="icon1"/>
              <h4>Animaciones con CSS</h4>
            </div>
          </div>
             </div>

             <div className='col-md-4 col-sm-12'>
                 <div class="flip-cody flip-vertical-cody">
            <div class="front-cody">
              <img className='img-cody'
            src="https://images.unsplash.com/photo-1563118490-a6fbac646b50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80 "/>
              <h1 class="text-shadow text-light">Flexbox</h1>
            </div>
            <div class="back-cody">
              <img class="imag" src={Flex} alt="icon1"/>
              <h4>Flexbox</h4>
            </div>
          </div>
             </div>
           </div>

           <div className='row'>
             <div className='col-md-4 col-sm-12'>
                  <div class="flip-cody flip-vertical-cody">
            <div class="front-cody">
                <img className='img-cody'
            src="https://images.unsplash.com/photo-1560457079-9a6532ccb118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60 "/>
              <h1 class="text-shadow text-light">Grid</h1>
            </div>
            <div class="back-cody">
              <img class="imag" src={Grid} alt="icon1"/>
              <h4>Grid</h4>
            </div>
          </div>
             </div>

             <div className='col-md-4 col-sm-12'>
               <div class="flip-cody flip-vertical-cody">
            <div class="front-cody">
             <img className='img-cody'
            src="https://images.unsplash.com/photo-1543145499-8193615267de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
              <h1 class="text-shadow text-light">AJAX</h1>
            </div>
            <div class="back-cody">
              <img class="imag" src={Ajax} alt="icon1"/>
              <h4>AJAX</h4>
            </div>
          </div>
             </div>

          <div className='col-md-4 col-sm-12'>
               <div class="flip-cody flip-vertical-cody">
            <div class="front-cody">
             <img className='img-cody'
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
              <h1 class="text-shadow text-light">JAVASCRIPT</h1>
            </div>
            <div class="back-cody ">
              <img class="imag " src={Jav} alt="icon1"/>
              <h4>JAVASCRIPT</h4>
            </div>
          </div>
             </div>
        </div>
          <br></br>
        </div>
         </div>
      </section>

         {/* <!-- seccion colabora en mi pagina --> */}
      <h1 class="text-center display-5"> Colabora en mi página </h1>
      <section class="text-center container colabora">
        <br></br>
 
        <div class="flip-co">
          <div class="front-co">
           <img className='img-co'
            src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXIlMjB3b3JrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
          </div>
          <div class="back-co ">
            <h6 class="text-light p-3">
              Como parte de mi formación Frontend, aprendí acerca de Git y GitHub, por lo que decidí subir mi código a
              GitHub
            </h6>
            <a href="" target="_blank" class="text-light">Ir al tutorial</a>
          </div>
        </div>


        <div class="flip-co">
          <div class="front-co">
           <img className='img-co'
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcHV0ZXIlMjB3b3JrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
          </div>
          <div class="back-co">
            <h6 class="text-light p-3">
              Puedes ayudarme a mejorar mi página, haciendo un fork de mi página, y enviando un pull request.
            </h6>
            <a href="" target="_blank" class="text-light">Ir al tutorial</a>
          </div>
        </div>


        <div class="flip-co">
          <div class="front-co">
               <img className='img-co'
            src="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
          </div>
          <div class="back-co">
            <h6 class="text-light p-3">
              Si nunca antes has colaborado con un repositorio, en Código Facilito hay un tutorial que lo explica
            </h6>
            <a href="" target="_blank" class="text-light">Ir al tutorial</a>
          </div>
        </div>
        <br></br>
      </section>
       {/* <!-- Seccion de importancia de las vacaciones --> */}
      <section class="3">
        <section class="parallax-3">
          <div class="parallax-inner">
          </div>
        </section>
        <section>
          <div class="container-fluid mb-5">
            <div class="text-center mt-5">
              <h1 class="text-center display-5">La importancia de las vacaciones</h1>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="box">
                  <div class="holiday uno">
                    <div class="icon"> <img class="imag" src={Icon2} alt="icon"/> </div>
                    <h4>1</h4>
                    <p>Mejora la salud mental</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="box">
                  <div class="holiday dos">
                    <div class="icon"> <img class="imag" src={Icon3} alt="icon"/> </div>
                    <h4>2</h4>
                    <p>Incrementa la motivación</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="box">
                  <div class="holiday tres">
                    <div class="icon"> <img class="imag" src={Icon1} alt="icon1"/> </div>
                    <h4>3</h4>
                    <p>Reduce el burnout </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="box">
                  <div class="holiday cuatro">
                    <div class="icon"><img class="imag" src={Icon4} alt="icon"/></div>
                    <h4>4</h4>
                    <p>Mejora tu productividad</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="box">
                  <div class="holiday cinco">
                    <div class="icon"> <img class="imag" src={Icon6} alt="icon"/></div>
                    <h4>5</h4>
                    <p>Mejora tu creatividad</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="box">
                  <div class="holiday seis">
                    <div class="icon "> <img class="imag" src={Icon5} alt="icon"/> </div>
                    <h4>6</h4>
                    <p>Mejora tu rendimiento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </section>
                    </section>
                    {/* Footer */}
        
          <div class="footer ">
            <div class="main-container">
              <div class="brand-name">
               <p class="text-center p-2 text-dark"> #ConcursoVeranoFrontend  -  Codigo Facilito - proyecto para Mexico - 2021.</p> 
              </div>
            </div>
          </div>
         </body >
        </>
    )
}

export default VacacionesCody;