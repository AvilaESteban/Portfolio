import React from  'react';
import Img from '../../assets/img/esteban.jpg';
import './about.css';

const About = () => {
    return(
        <>
    <header>
      <img src={Img} alt="Zaid's Profile Picture" class="profile-image"/>
      <h1 className="tag name">Hi, I’m Esteban!</h1>
      <p className="tag from">From,</p>
      <p className="tag location"> <i class="fas fa-map-marker-alt"> </i>  Tucuman, Argentina!!</p>
    </header>

    <main className="flex">
      <div className="card">
        <h2><span class="bottom-border">About Me</span></h2>

        <p className="text">I love designing things and, Web development has given me a reason 
          to bring my artistic imagination to life. Building something and keeping 
          in mind the final product is an immense motivation for me itself. I also 
          feel proud of my work which, I didn't use to get much when I worked as a software tester.</p>
        <p className="text">When I am not designing websites, I do cinematography and make short 
          cinematic music videos on <a class="youtube" href="https://youtu.be/i18QgjDj94U" target="_blank"> YouTube</a>. It's very fulfilling for me and 
          has given a creative-outlet to my avocation.</p>

      </div> 

      <div className="card">
        <h2><span className="bottom-border">Goals</span></h2>
        <p className="text">I would like to be able to expert in at least one of the technology stack. 
          Get a nice job with a nice working environment. I also like to increase my performance in any work I do.
        </p>
         <ul className="skills"> 
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Ruby</li>
          <li>Rails</li>
        </ul>
        <p className="text">Also my goals is to do masters after few years of job and build some interesting 
          applications under my belt to influence market.</p>
      </div> 

    </main>

        <footer>
            <ul>
              <li><a href="https://twitter.com/ZaidIrfanKhan" target="_blank" class="social twitter">Twitter</a></li>
              <li><a href="https://www.linkedin.com/in/zaid-khan-9a4b964b/" target="_blank" class="social linkedin">LinkedIn</a></li>
              <li><a href="https://github.com/ZaidKhan144" target="_blank" class="social github">Github</a></li>
            </ul>
            <p className="copyright">&copy; 2021, Avila Esteban</p>
          </footer>
        </>
    )
}

export default About;