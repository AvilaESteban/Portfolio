import React, { useState } from "react";
import "../Assets/style.css";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Peinado1 from "../Assets/img/peinados/peinado1.jpg";
import Peinado2 from "../Assets/img/peinados/peinado2.jpg";
import Peinado3 from "../Assets/img/peinados/peinado3.jpg";
import Peinado4 from "../Assets/img/peinados/peinado4.jpg";
import Color3 from "../Assets/img/color/color3.jpg";
import Corto2 from "../Assets/img/cortos/corto2.jpg";
import AOS from "aos";
// import 'aos/dist/aos.css';
import Banner from "../common/Banner";
import Header from "../common/Header";
import Footer from "../common/Footer";
import SeccionPeinados from "../inicio/SeccionPeinados";
import SeccionColor from "../inicio/SeccionColor";
import SeccionCortos from "../inicio/SeccionCortos";
import SeccionTips from "../inicio/SeccionTips";
import SeccionDescuentos from "../inicio/SeccionDescuentos";
import SeccionClientes from "../inicio/SeccionClientes";
import { Parallax, Background } from "react-parallax";

const Inicio = () => {
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);
  const [showC, setShowC] = useState(true);
  const [showD, setShowD] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);
  const toggleShowC = () => setShowC(!showC);
  const toggleShowD = () => setShowD(!showD);

  return (
    <>
      {/* <Header/> */}
      <Banner />
      {/* Seccion Peinados */}
      <SeccionPeinados />
      {/* Seccion Color */}
      <SeccionColor />
      {/* Seccion cortos*/}
      <SeccionCortos />

      <div>
        <Parallax
          blur={{ min: -25, max: 25 }}
          bgImage={"/Assets/img/cortos/corto2.jpg"}
          bgImageAlt="the dog"
          strength={300}
        >
          <div style={{ height: "200px" }} />
          <Background className="custom-bg">
            <img
              src="https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-1.2.1ixid=eyJhcHBfaWQiOjEyMDd9auto=formatfit=cropw=500q=60"
              alt="fill murray"
            />
          </Background>
          <h2 className="text-center ">
            <Jumbotron className="jumbotrom-banner ">
              <Container>
                <h1 className="text-light">Peluqueria's</h1>
                <p className="text-light">
                  <strong>Tu mejor opción.!!</strong>
                </p>
              </Container>
            </Jumbotron>
          </h2>
          <div style={{ height: "50px" }} />
        </Parallax>
        <Parallax strength={200}>
          <div className="text-center "></div>
          <Background className="custom-bg">
            <img
              src="https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-1.2.1ixid=eyJhcHBfaWQiOjEyMDd9auto=formatfit=cropw=500q=60"
              alt="fill murray"
            />
          </Background>
          <div style={{ height: "150px" }} />
        </Parallax>
      </div>

      {/* Seccion Tips */}
      <SeccionTips />
      {/* Seccion descuentos */}
      <SeccionDescuentos />
      {/* seccion clientes*/}
      <div className="style text-center text-light p-3">
        <h2 className="p-3" data-aos="fade-in">
          Comentarios de nuestros clientes
        </h2>
      </div>
      <div className="container">
        <div className="row text-center my-3 p-3 ">
          <div className="col-xl-6 col-md-6 col-sm-12 ">
            <Button
              onClick={toggleShowA}
              variant="outline-dark"
              className="w-100"
            >
              Juanita
            </Button>
          </div>
          <div className="col-xl-6 col-md-6 col-sm-12 w-100">
            <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header>
                <strong className="mr-auto">Juanita Truman </strong>
                <small>12 de octubre del 2020</small>
              </Toast.Header>
              <Toast.Body>Woohoo, Me encantó mi nuevo Look!</Toast.Body>
              <img src={Color3} alt="color" className="peinados" />
            </Toast>
          </div>
        </div>
        <div className="row text-center my-3 p-3 ">
          <div className="col-xl-6 col-md-6 col-sm-12 ">
            <Button
              onClick={toggleShowB}
              variant="outline-dark"
              className="w-100"
            >
              Margarita
            </Button>
          </div>
          <div className="col-xl-6 col-md-6 col-sm-12 w-100 ">
            <Toast onClose={toggleShowB} show={showB} animation={false}>
              <Toast.Header>
                <strong className="mr-auto">Margarita Diaz</strong>
                <small>01 de abril del 2020</small>
              </Toast.Header>
              <Toast.Body>
                Feliz.! Gracias chicas por dejarme siempre como una reina..
              </Toast.Body>
              <img src={Corto2} alt="color" className="peinados" />
            </Toast>
          </div>
        </div>
        <div className="row text-center my-3 p-3">
          <div className="col-xl-6 col-md-6 col-sm-12 ">
            <Button
              onClick={toggleShowC}
              variant="outline-dark"
              className=" w-100"
            >
              Marion
            </Button>
          </div>
          <div className="col-xl-6 col-md-6 col-sm-12 w-100 ">
            <Toast show={showC} onClose={toggleShowC}>
              <Toast.Header>
                <strong className="mr-auto"> Marion Gonzalez</strong>
                <small>24 de mayo del 2020</small>
              </Toast.Header>
              <Toast.Body>
                {" "}
                Hermoso el trato con sus clientas.! Sigan asi chicas.!!
              </Toast.Body>
              <img src={Peinado2} alt="color" className="peinados" />
            </Toast>
          </div>
        </div>
        <div className="row text-center my-3 p-3 ">
          <div className="col-xl-6 col-md-6 col-sm-12 ">
            <Button
              onClick={toggleShowD}
              variant="outline-dark"
              className="w-100 "
            >
              Susana
            </Button>
          </div>
          <div className="col-xl-6 col-md-6 col-sm-12 w-100 ">
            <Toast onClose={toggleShowD} show={showD} animation={false}>
              <Toast.Header>
                <strong className="mr-auto">Susana LaTorre </strong>
                <small>15 de octubre del 2020</small>
              </Toast.Header>
              <Toast.Body>
                Encantada de poder ir al mejor salon de belleza, por muchos años
                más..
              </Toast.Body>
              <img src={Peinado4} alt="color" className="peinados" />
            </Toast>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

AOS.init({
  useClassNames: true,
  initClassName: false,
});

export default Inicio;
