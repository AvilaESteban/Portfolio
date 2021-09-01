import React from 'react';
import './cv.css';
import Img from '../../../assets/img/esteban.jpg';
import Icon from '../.././education/iconos/bandera.jpg';
import Icon2 from '../.././education/iconos/civ.png';
import Icon3 from '../.././education/iconos/calend.jpg';
import Icon4 from '../.././education/iconos/nomb.jpg';

const Cv = () => {

    return(
        <>
       
        {/* <div style={{position:'absolute',width:'100%',height:'100%'}}>
            <object
                data={require('../docPdf/cv..pdf')}
                type="application/pdf"
                width='100%'
                height='100%'
                >
                    
            </object>
        </div> */}

            <div className="container-fluid">
        <div className="row">
            <div className="col-md-3 col-sm-12 dos-cv">
                <br></br>
                <h3 className='h3-cv'><b>Información de  contacto</b></h3>
                <hr></hr>
                <h4 className='h4-cv'><b>Email:</b></h4>
                estebanvan9@gmail.com
                <hr></hr>
                <h4 className='h4-cv'><b>Teléfono</b></h4>
                Cel: 0381-3-197363  -  0381-5-614202
                <hr></hr>
                <h4 className='h4-cv'><b>Dirección:</b></h4>
                 San isidro de Lules, Tucumán.
                <hr></hr>
                <br></br>
                <br></br>
                <h3 className='h3-cv'><b>Datos Personales</b></h3>
                <hr></hr>
                <h4 className='h4-cv'><b>Apellido-Nombre</b></h4>
                Avila Juan  Angel Esteban <img src={Icon4} class="ico-cv" alt="calend"/>
                <hr></hr>
                <h4 className='h4-cv'><b>Fecha de nacimiento</b></h4>
                12-08-88 <img src={Icon3} class="ico-cv" alt="calend"/>
                <hr></hr>
                <h4 className='h4-cv'><b>Estado civil</b></h4>
                Soltero <img src={Icon2} class="ico-cv" alt="civ"/>
                <hr></hr>
                <h4 className='h4-cv'><b>Nacionalidad</b></h4>
                Argentino <img src={Icon} class="ico-cv" alt="band"/>
                <hr></hr>
              </div>
           <div class="col-md-9 col-sm-12  uno-cv">
               <div class="container">
                  <div class="row">
                     <div class="col-xl-3 col-sm-12 text-center ">
                         <br></br>

                        <img className='img-cv p-2' src={Img} alt="" />
                     </div>
                     <div class="col-xl-9 col-md-12">
                         <br></br>
                        <h3 className='h3-cv'> <b>Avila Juan  Angel Esteban</b></h3>
                        <h4 className='h4-cv'><b>Desarrollador FrontEnd</b></h4>
                        <h5 className='h5-cv'>HTML5, CSS3, Bootstrap, Javascript, ES6, Reactjs,GitHub, Trello, design responsive </h5>
                        <hr></hr>
                     </div>
                  </div>
                  </div>
                  <div>
                    <h3 className='h3-cv'>Mi Perfil</h3>
                    <br></br>
                      <h6>Me considero una persona a nivel personal, muy sociable, apasionado del deporte y de proponerme nuevos desafios que puedan impulsarme a mejorar tanto profesional como personalmente.
                       Me defino una persona responsable, puntual, con mucha motivaciòn y ganas de seguir creciendo dia a dia. 
                      </h6>
                      <br></br>
                      <h3 className='h3-cv'>Objetivos</h3>
                      <ul>
                          <li>Desempeñarme en el puesto que me asignen.</li>
                          <li>Aceptar los desafios que me proponga la empresa.</li>
                          <li>Lograr nuevas metas laborales como  así personales.</li>
                          <li>Crecer en conocimientos.</li>

                      </ul>
                      <br></br>
                      <h3 className='h3-cv'>Formación</h3>
                        <ul>
                            <li>Rolling Code School - Programación Full Stack - año: 2019 - 2020. </li>
                            <li>Ingles Tecnico - UNT - Nivel Beginner- 2021</li>
                            <li>Protesista Dental - Especialista en protesis sobre implantes - titulo obtenido en el año 2008 (actualmente ejerciendo y a la vez, preparàndome para poder dedicarme al 100% a la programaciòn) </li >
                        </ul>
                       <br></br>
                       <br></br>
                       <h3 className='h3-cv'>Cursos</h3>
                       <ul>
                        <li>Workshop interno sobre "Scrum Master" - Rolling Code school - disertante: Nicole Dela Porte. año: 2019.</li>
                       <li>Workshop interno sobre "Data science" - Rolling Code school - año: 2019 </li>
                       <li>Workshop sobre "Procesos de calidad de software y testing aplicados  a videos juegos" . Globant-Tucumán - complejo albercity - Disertante: Leonardo Pace- 2019</li>
                    </ul>
                     <br></br>
                     <h3 className='h3-cv'>Experiencia</h3>
                       <ul>
                           <li>Proyectos de Landing-Page realizados en  Rolling  Code School.</li> 
                           <li> Proyecto Verano FrontEnd - Repositorio de Codigo Facilito - Mexico - Contribui como colaborador a este proyecto Open Source de manera 100% remota desde la Argentina.</li>
                           <li> trabajo en equipo, experiencia en las siguientes herramientas:<br></br>
                            - wireframe para el diseño o mockup, <br></br>
                            - trello para organizar las tareas en equipo,<br></br>
                            - GitHub plataforma para alojar y subir nuestro codigos (repositorio),<br></br>
                            - Zoom para realizar daily meeting en equipo,<br></br>
                            - Slack un canal para comunicarnos  y ayudarnos entre Todos.<br></br>
                            - Metodologias Agil Scrum,<br></br>
                            - Proyectos diseñados 100% responsive y con patrones de diseños (en caso que lo requiera.)
                           </li>
                       </ul>

                  </div>
               </div>
                
            </div>
        </div>
        <div class="row footer-cv">
           <div class="col-md-12 col-sm-12">
            
           </div>
        </div>
   


        </>
    );
}

export default Cv;