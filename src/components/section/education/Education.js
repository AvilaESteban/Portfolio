import React from 'react';
import './education.css';
import Img1 from './iconos/html5.png';
import Img2 from './iconos/css3.png';
import Img3 from './iconos/js.png';
import Img4 from './iconos/bootstrap.png';
import Img5 from './iconos/react.jpg';
import Img6 from './iconos/node.png';
import Img7 from './iconos/express.png';
import Img8 from './iconos/mongo.png';
import Img9 from './iconos/github.png';
import Imcv from './iconos/cv.png';

const Education = () => {
    return(
        <>
           <section>
          <div className="container-fluid  body-educ">
            <div className="text-center p-5 ">
              <p className='text-light text-center'>Conocimiento en los siguientes</p>
              <h1 className="text-center display-5 text-light "> Lenguajes de programaciòn</h1>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="box">
                  <div className="holiday uno">
                    <div className="icon">
                    <img className="icoEduc" src={Img1} alt="icon"/>
                      </div>
                    <h4>HTML5</h4>
                    <p>Es un lenguaje de marcado utilizado para la elaboraciòn del contenido y estructura de una pagina web.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="holiday dos">
                    <div className="icon">
                     <img className="icoEduc" src={Img2} alt="icon"/>
                     </div>
                    <h4>CSS3</h4>
                    <p>Es un lenguaje de diseño gràfico que se utiliza para definir la presentaciòn y estilo de una pagina web.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="holiday tres">
                    <div className="icon">
                     <img className="icoEduc" src={Img3} alt="icon"/>
                      </div>
                    <h4>JavaScript</h4>
                    <p>Es un lenguaje de programaciòn que permite la interacciòn del usuario con una  aplicaciòn o pàgina web.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="box">
                  <div className="holiday cuatro">
                    <div className="icon">
                     <img className="icoEduc" src={Img4} alt="icon"/>
                    </div>
                    <h4>Bootstrap</h4>
                    <p>Es una libreria que contiene plantillas de  diseño y componentes web. Facilita el armado de una pagina web, permitiendo que sea adaptable a diferentes dispositivos.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="holiday cinco">
                    <div className="icon"> 
                     <img className="icoEduc" src={Img5} alt="icon"/>
                    </div>
                    <h4>React</h4>
                    <p>Es un Framework de JavaScript que permite crear interfaces de aplicaciones web donde se facilita su desarrollo en una sola pagina. </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="holiday seis">
                    <div className="icon ">
                      <img className="icoEduc" src={Img6} alt="icon"/>
                     </div>
                    <h4>Node js</h4>
                    <p>Es un entorno de ejecuciòn basado en JavaScript que se utiliza para las bases de datos en una aplicaciòn web.</p>
                  </div>
                </div>
              </div>
              <div className="row">
              <div className="col-md-4">
                <div className="box">
                  <div className="holiday uno">
                    <div className="icon">
                    <img className="icoEduc" src={Img7} alt="icon"/>
                      </div>
                    <h4>Express.js</h4>
                    <p>Es un Framework para Node.js que se utiliza para facilitar la construcciòn de aplicaciones web.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="holiday dos">
                    <div className="icon">
                     <img className="icoEduc" src={Img8} alt="icon"/>
                     </div>
                    <h4>Mongo DB</h4>
                    <p>Es un sistema de base de datos NoSQL orientado a documentos con un formato especifico.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="holiday tres">
                    <div className="icon">
                     <img className="icoEduc" src={Img9} alt="icon"/>
                      </div>
                    <h4>GitHub</h4>
                    <p>Es una plataforma de alojamiento de còdigos para el control de versiones y permite trabajar en equipo desde cualquier lugar,</p>
                  </div>
                </div>
              </div>
            </div>
             <div className="text-center p-5 ">
               <span className="my-2 p-2 text-light">ver CV </span>
               <br></br>
                <a href="/education/cv"  >
                  <div >
                    <img className="icoEduc " src={Imcv} alt="cv" />
                   </div>
                </a>
              </div> 
            </div>
          </div>

        </section>
  

        </>
    );
}

export default Education;