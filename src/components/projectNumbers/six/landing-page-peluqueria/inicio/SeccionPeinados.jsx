import React from "react";
import "../Assets/style.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Peinado1 from "../Assets/img/peinados/peinado1.jpg";
import Peinado2 from "../Assets/img/peinados/peinado2.jpg";
import Peinado3 from "../Assets/img/peinados/peinado3.jpg";
import Peinado4 from "../Assets/img/peinados/peinado4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { animateScroll as scroll } from "react-scroll";

const SeccionPeinados = () => {
  const onClickDown = () => {
    scroll.scrollToBottom();
  };

  return (
    <>
      <div className="inicio">
        <Jumbotron className="jumbotrom2 ">
          <Container>
            <h1 className="text-dark">Peluqueria's</h1>
            <p className="text-dark">
              <strong>Tu mejor opción.!!</strong>
            </p>
          </Container>
          <div>
            <button className="btn btn-dark" onClick={onClickDown}>
              {" "}
              <FontAwesomeIcon icon={faAngleDoubleDown} />
            </button>
          </div>
        </Jumbotron>
      </div>

      <div className="style text-center text-light">
        <h2 className="p-4">Los Mejores Peinados </h2>
      </div>
      <div className=" p-2 my-2">
        <div className="row p-5">
          <div className="col-xl-3 col-md-6 col-sm-12">
            <img src={Peinado1} alt="Peinados" className="peinados" />
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12">
            <img src={Peinado2} alt="Peinados" className="peinados " />
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12">
            <img src={Peinado3} alt="Peinados" className="peinados" />
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12">
            <img src={Peinado4} alt="Peinados" className="peinados" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SeccionPeinados;
