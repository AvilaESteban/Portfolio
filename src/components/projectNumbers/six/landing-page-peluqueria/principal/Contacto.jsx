import React from "react";
import "../Assets/style.css";
import Icono1 from "../Assets/iconos/face.ico";
import Icono2 from "../Assets/iconos/instagram.ico";
import Icono3 from "../Assets/iconos/messenger.ico";
import Icono4 from "../Assets/iconos/twitter.ico";

const Contacto = () => {
  return (
    <>
      <h1 className="">Contacto</h1>
      <div className="container imgGal text-light text-center p-5 my-5">
        <div className="row ">
          <div className="col-xl-6 col-md-12 col-sm-12">
            <h1>Informacion de contacto</h1>
            <ul>
              <li>Salón Belleza - Av. Aconquija 500 - Yerba Buena</li>
              <li> Provincia de Tucuman - Argentina</li>
              <li>Codigo Postal:4000 Telefono: (0381) 4-302828</li>
            </ul>
          </div>
          <div className="col-xl-6 col-md-12 col-sm-12">
            <h1>Horarios de Atención</h1>
            <ul>
              <li>Martes a viernes: De 15:00pm a 22:00pm</li>
              <li>Sabado: De 8:00am a 8:00pm</li>
              <li>Domingo y lunes: cerrado</li>
            </ul>
          </div>
        </div>
      </div>
      <hr></hr>

      <div className="  my-3 p-3 text-center">
        <h2> Nuestras Redes Sociales</h2>
        <a href="http://facebook.com">
          {" "}
          <img src={Icono1} className="icono" alt="icono"></img>{" "}
        </a>
        <a href="http://instagram.com">
          {" "}
          <img src={Icono2} className="icono" alt="icono"></img>{" "}
        </a>
        <a href="http://messenger.com">
          {" "}
          <img src={Icono3} className="icono" alt="icono"></img>
        </a>
        <a href="http://twitter.com">
          {" "}
          <img src={Icono4} className="icono" alt="icono"></img>
        </a>
      </div>

      <div className="mapa">
        <h2 className="style text-center text-light ">Mapa de ubicación</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.730335248289!2d-65.27495658545149!3d-26.816713795664928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225cd9e931ed0f%3A0x90e757efc272ddd0!2sCDR%2C%20Av.%20Aconquija%20500%2C%20T4107%20Yerba%20Buena%2C%20Provincia%20de%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1602889207565!5m2!1ses-419!2sar"
          width="100%"
          height="450"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </>
  );
};

export default Contacto;
