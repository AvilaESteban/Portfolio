import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Img from "../Assets/img/gif/pelu5.gif";
import Img1 from "../Assets/img/gif/pelu10.gif";
import Img2 from "../Assets/img/gif/pelu3.gif";
import '../Assets/style.css'

const Banner = () => {
  return (
    <>
      <Carousel expand="lg">
        <Carousel.Item>
          <img src={Img} alt="1" className="img"></img>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img1} alt="2" className="img"></img>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Img2} alt="3" className="img"></img>
          <Carousel.Caption>
            <Jumbotron className="jumbotrom-banner ">
              <Container>
                <h1 className="text-dark">Peluqueria's</h1>
                <p className="text-dark">
                  <strong>Tu mejor opción.!!</strong>
                </p>
              </Container>
            </Jumbotron>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
