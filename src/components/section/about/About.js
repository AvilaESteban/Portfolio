import React from  'react';
import Img from '../../assets/img/esteban.jpg';
import './about.css';

const About = () => {
    return(
        <>
 <body className='body-about p-1 '>
    <header>
      <img src={Img} alt="Zaid's Profile Picture" class="profile-image"/>
      <h1 className="tag name">Hi, I’m Esteban!</h1>
      <p className="tag from">From,</p>
      <p className="tag location"> <i class="fas fa-map-marker-alt"> </i>  Tucuman, Argentina!!</p>
    </header>

    <main className="flex ">
      <div className="card">
        <h2><span class="bottom-border">About Me</span></h2>

        <p className="text">Mi nombre es Esteban, soy de Tucuman, Argentina y me encuentro abocado a la busqueda de mi primer empleo IT, actualmente mi actividad principal no es la programaciòn ya que soy un especialista en protesis sobre implantes que luego de 10 años de profesion me planteè un nuevo gran desafio a mi vida y fuè la de aprender y estudiar programacion, por tal motivo, en octubre del año 2019 decidì comenzar un bootscamp donde de a poco fui familiarizandome con  cada lenguaje de programacion, aprendi a realizar proyectos, a trabajar en equipo con metodologias agil scrum, a implementar el uso de Github para subir los codigos de nuestra rama a dicha plataforma , a implementar el uso de trello para organizar las tareas y a diario realizabamos daily meeting para el seguimiento de cada proyecto con su posterior feedback por parte de nuestro mentor. A menudo, me surgia la incertidumbre de seguir o no con este abismal cambio pero luego con la pandemia que tuvimos que afrontar me llevo a la conclusiòn de que este es el camino correcto,</p>

      </div> 

      <div className="card">
        <p className="text">
         lo cual, me motiva a seguir hasta que pueda cumplir mi objetivo de tener una oportunidad de formar parte de una empresa de software y de poder crecer junto a ella.
        Hace poco, participe de un concurso para Mexico, "veranoFrontend", donde  aprendi a trabajar con codigos open source, a realizar  pull request y a contribuir como colaborador en dicho proyecto.Si bien, estoy capacitado para desempeñarme como full stack pero me gustaria comenzar a trabajar del lado del FrontEnd o como maquetador web por un tiempo. Por ultimo, solo queda spor decir que tengo toda la predisposicion y ganas de seguir creciendo y lograr que la futura empresa en la que trabaje,con el tiempo, sienta orgullo de que pertenezca a su equipo.</p>
      </div> 

    </main>

        <footer className='text-center'>
            <p className="copyright">&copy; 2021, Avila Esteban</p>
          </footer>

       </body>
        </>
    )
}

export default About;