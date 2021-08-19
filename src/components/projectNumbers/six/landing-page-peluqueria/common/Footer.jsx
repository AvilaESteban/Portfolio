import React from "react";
import "../Assets/style.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleUp,
  faMapMarkerAlt,
  faPhoneSquareAlt,
  faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const onClickUp = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <div className="style">
        <Jumbotron>
          <div>
            <button className="btn btn-outline-dark " onClick={onClickUp}>
              <FontAwesomeIcon icon={faAngleDoubleUp} />
            </button>
          </div>
          <Container>
            <h1 className="text-dark text-center">Peluqueria's</h1>
            <p className="text-dark text-center">
              <strong>Tu mejor opción.!!</strong>
            </p>
          </Container>
          <div className="row">
            <div className="col-xl-4 col-md-4 col-sm-12">
              <h1 className="text-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </h1>
              <p className="text-center">San Miguel de Tucumán - Argentina</p>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-12">
              <h1 className="text-center">
                <FontAwesomeIcon icon={faPhoneSquareAlt} />
              </h1>
              <p className="text-center">
                (0381) 4 - 33-22-23 - (0381) 155-29-44-24
              </p>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-12">
              <h1 className="text-center">
                <FontAwesomeIcon icon={faEnvelopeSquare} />
              </h1>
              <p className="text-center">Peluqueria's@peluqueria.com.ar</p>
            </div>
          </div>
        </Jumbotron>
      </div>
    </>
  );
};

export default Footer;
