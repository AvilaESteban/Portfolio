import React from "react";
import "../Assets/style.css";
import Gal1 from "../Assets/img/galeria/gal1.jpg";
import Gal3 from "../Assets/img/galeria/gal3.jpg";
import Gal4 from "../Assets/img/galeria/gal4.jpg";
import Gal5 from "../Assets/img/galeria/gal5.jpg";
import Alisado1 from "../Assets/img/galeria/alisado1.jpg";
import Alisado2 from "../Assets/img/galeria/alisado2.jpg";
import Alisado3 from "../Assets/img/galeria/alisado3.jpg";
import Alisado4 from "../Assets/img/galeria/alisado4.jpg";
import Tintura1 from "../Assets/img/galeria/tintura1.jpg";
import Tintura2 from "../Assets/img/galeria/tintura2.jpg";
import Tintura3 from "../Assets/img/galeria/tintura3.jpg";
import Tintura4 from "../Assets/img/galeria/tintura4.jpg";
import Corte1 from "../Assets/img/galeria/corte1.jpg";
import Corte2 from "../Assets/img/galeria/corte2.jpg";
import Corte3 from "../Assets/img/galeria/corte3.jpg";
import Corte4 from "../Assets/img/galeria/corte4.jpg";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const Galeria = () => {
  return (
    <div className="imgGal">
      <Jumbotron className="jumbotrom ">
        <Container>
          <h1 className="text-dark">Peluqueria's</h1>
          <p className="text-dark">
            <strong>Tu mejor opción.!!</strong>
          </p>
        </Container>
      </Jumbotron>
      <div className="container  ">
        <h3 className="titulo">Peinados</h3>
        <hr></hr>
        <div className="row">
          <div className="col-xl-3 col-md-6 col-sm-12">
            <div className="flip-container">
              <div class="flipper">
                <div class="front">
                  <img src={Gal1} alt="Peinados" className="galeria" />
                </div>
                <div className="back  ">
                  <Jumbotron className="jumbotromGaleria ">
                    <Container>
                      <h1 className="text-dark">Peinados</h1>
                      <hr></hr>
                      <p className="text-dark">
                        <strong>Los mejores peinados</strong>
                      </p>
                      <p className="text-dark">
                        <strong>consultar precios.</strong>
                      </p>
                    </Container>
                  </Jumbotron>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12">
            <div className="flip-container">
              <div class="flipper">
                <div class="front">
                  <Jumbotron className="jumbotromGaleria ">
                    <Container>
                      <h1 className="text-dark">Peluqueria's</h1>
                      <p className="text-dark">
                        <strong>Tu mejor opción.!!</strong>
                      </p>
                    </Container>
                  </Jumbotron>
                </div>
                <div className="back  ">
                  <img src={Gal4} alt="Peinados" className="galeria" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12">
            <div className="flip-container">
              <div class="flipper">
                <div class="front">
                  <img src={Gal3} alt="Peinados" className="galeria" />
                </div>
                <div className="back  ">
                  <Jumbotron className="jumbotromGaleria ">
                    <Container>
                      <h1 className="text-dark">Peinados</h1>
                      <hr></hr>
                      <p className="text-dark">
                        <strong>Super descuentos los dias martes</strong>
                      </p>
                      <p className="text-dark">
                        <strong> Con tarjeta Naranja.</strong>
                      </p>
                    </Container>
                  </Jumbotron>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12">
            <div className="flip-container">
              <div class="flipper">
                <div class="front">
                  <Jumbotron className="jumbotromGaleria ">
                    <Container>
                      <h1 className="text-dark">Peluqueria's</h1>
                      <p className="text-dark">
                        <strong>Tu mejor opción.!!</strong>
                      </p>
                    </Container>
                  </Jumbotron>
                </div>
                <div className="back  ">
                  <img src={Gal5} alt="Peinados" className="galeria" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="titulo">Alisados</h3>
        <hr></hr>
        <div className="row ">
          <div className="col-xl-3 col-md-6 col-sm-12">
            <div className="flip-container">
              <div class="flipper">
                <div class="front">
                  <Jumbotron className="jumbotromGaleria ">
                    <Container>
                      <h1 className="text-dark">Peluqueria's</h1>
                      <p className="text-dark">
                        <strong>Tu mejor opción.!!</strong>
                      </p>
                    </Container>
                  </Jumbotron>
                </div>
                <div className="back  ">
                  <img src={Alisado1} alt="alisados" className="galeria" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12">
            <div className="flip-container">
              <div class="flipper">
                <div class="front">
                  <img src={Alisado2} alt="alisados" className="galeria" />
                </div>
                <div className="back  ">
                  <Jumbotron className="jumbotromGaleria ">
                    <Container>
                      <h1 className="text-dark">Alisados</h1>
                      <hr></hr>
                      <p className="text-dark">
                        <strong>Los mejores alisados</strong>
                      </p>
                      <p className="text-dark">
                        <strong>consultar precios.</strong>
                      </p>
                    </Container>
                  </Jumbotron>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12">
            <div className="flip-container">
              <div class="flipper">
                <div class="front">
                  <Jumbotron className="jumbotromGaleria ">
                    <Container>
                      <h1 className="text-dark">Alisados</h1>
                      <hr></hr>
                      <p className="text-dark">
                        <strong>Super descuentos los dias martes</strong>
                      </p>
                      <p className="text-dark">
                        <strong> Con tarjeta Naranja.</strong>
                      </p>
                    </Container>
                  </Jumbotron>
                </div>
                <div className="back  ">
                  <img src={Alisado3} alt="alisados" className="galeria" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12">
            <div className="flip-container">
              <div class="flipper">
                <div class="front">
                  <img src={Alisado4} alt="alisados" className="galeria" />
                </div>
                <div className="back  ">
                  <Jumbotron className="jumbotromGaleria ">
                    <Container>
                      <h1 className="text-dark">Peluqueria's</h1>
                      <p className="text-dark">
                        <strong>Tu mejor opción.!!</strong>
                      </p>
                    </Container>
                  </Jumbotron>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="titulo">Tinturas</h3>
        <hr></hr>
        <div className="row">
          <div className="col-xl-3 col-md-6 col-sm-12">
            <div className="flip-container">
              <div class="flipper">
                <div class="front">
                  <img src={Tintura1} alt="Tinturas" className="galeria" />
                </div>
                <div className="back  ">
                  <Jumbotron className="jumbotromGaleria ">
                    <Container>
                      <h1 className="text-dark">Tinturas</h1>
                      <hr></hr>
                      <p className="text-dark">
                        <strong>Los mejores colores</strong>
                      </p>
                      <p className="text-dark">
                        <strong>consultar precios.</strong>
                      </p>
                    </Container>
                  </Jumbotron>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12">
            <div className="flip-container">
              <div class="flipper">
                <div class="front">
                  <Jumbotron className="jumbotromGaleria ">
                    <Container>
                      <h1 className="text-dark">Peluqueria's</h1>
                      <p className="text-dark">
                        <strong>Tu mejor opción.!!</strong>
                      </p>
                    </Container>
                  </Jumbotron>
                </div>
                <div className="back  ">
                  <img src={Tintura2} alt="tinturas" className="galeria" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12">
            <div className="flip-container">
              <div class="flipper">
                <div class="front">
                  <img src={Tintura3} alt="tinturas" className="galeria" />
                </div>
                <div className="back  ">
                  <Jumbotron className="jumbotromGaleria ">
                    <Container>
                      <h1 className="text-dark">Tinturas</h1>
                      <hr></hr>
                      <p className="text-dark">
                        <strong>Super descuentos los dias miercoles</strong>
                      </p>
                      <p className="text-dark">
                        <strong> Con tarjeta Naranja.</strong>
                      </p>
                    </Container>
                  </Jumbotron>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12">
            <div className="flip-container">
              <div class="flipper">
                <div class="front">
                  <Jumbotron className="jumbotromGaleria ">
                    <Container>
                      <h1 className="text-dark">Peluqueria's</h1>
                      <p className="text-dark">
                        <strong>Tu mejor opción.!!</strong>
                      </p>
                    </Container>
                  </Jumbotron>
                </div>
                <div className="back  ">
                  <img src={Tintura4} alt="tinturas" className="galeria" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="titulo">Cortes</h3>
        <hr></hr>
        <div className="row">
          <div className="col-xl-3 col-md-6 col-sm-12">
            <div className="flip-container">
              <div class="flipper">
                <div class="front">
                  <Jumbotron className="jumbotromGaleria ">
                    <Container>
                      <h1 className="text-dark">Peluqueria's</h1>
                      <p className="text-dark">
                        <strong>Tu mejor opción.!!</strong>
                      </p>
                    </Container>
                  </Jumbotron>
                </div>
                <div className="back  ">
                  <img src={Corte1} alt="cortes" className="galeria" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12">
            <div className="flip-container">
              <div class="flipper">
                <div class="front">
                  <img src={Corte2} alt="cortes" className="galeria" />
                </div>
                <div className="back  ">
                  <Jumbotron className="jumbotromGaleria ">
                    <Container>
                      <h1 className="text-dark">Cortes</h1>
                      <hr></hr>
                      <p className="text-dark">
                        <strong>Los mejores Cortes</strong>
                      </p>
                      <p className="text-dark">
                        <strong>consultar precios.</strong>
                      </p>
                    </Container>
                  </Jumbotron>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12">
            <div className="flip-container">
              <div class="flipper">
                <div class="front">
                  <Jumbotron className="jumbotromGaleria ">
                    <Container>
                      <h1 className="text-dark">Cortes</h1>
                      <hr></hr>
                      <p className="text-dark">
                        <strong>Super descuentos los dias martes</strong>
                      </p>
                      <p className="text-dark">
                        <strong> Con tarjeta Naranja.</strong>
                      </p>
                    </Container>
                  </Jumbotron>
                </div>
                <div className="back  ">
                  <img src={Corte3} alt="cortes" className="galeria" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12">
            <div className="flip-container">
              <div class="flipper">
                <div class="front">
                  <img src={Corte4} alt="cortes" className="galeria" />
                </div>
                <div className="back  ">
                  <Jumbotron className="jumbotromGaleria ">
                    <Container>
                      <h1 className="text-dark">Peluqueria's</h1>
                      <p className="text-dark">
                        <strong>Tu mejor opción.!!</strong>
                      </p>
                    </Container>
                  </Jumbotron>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Galeria;
