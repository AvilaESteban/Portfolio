import React from "react";
import Card from "react-bootstrap/Card";
import AOS from "aos";
import Peinado5 from "../Assets/img/peinados/peinado5.jpg";
import Peinado6 from "../Assets/img/peinados/peinado6.jpg";
import Peinado7 from "../Assets/img/peinados/peinado7.jpg";
import Peinado8 from "../Assets/img/peinados/peinado8.jpg";
import Peinado9 from "../Assets/img/peinados/peinado9.jpg";
import Peinado10 from "../Assets/img/peinados/peinado10.jpg";
import Peinado11 from "../Assets/img/peinados/peinado11.jpg";
import Peinado12 from "../Assets/img/peinados/peinado12.jpg";
import Peinado13 from "../Assets/img/peinados/peinado13.jpg";
import Peinado15 from "../Assets/img/peinados/peinado15.jpg";
import Peinado16 from "../Assets/img/peinados/peinado16.jpg";
import Peinado17 from "../Assets/img/peinados/peinado17.jpg";

const Peinados = () => {
  return (
    <>
      <div className=" p-5 tips">
        <div className="row p-2 my-2">
          <div className="col-xl-3 col-md-6 col-sm-12 my-5" data-aos="zoom-out">
            <Card style={{ width: "18rem" }} className="card ">
              <Card.Body>
                <img src={Peinado5} alt="color" className="w-100" />
              </Card.Body>
            </Card>
          </div>
          <div
            className="col-xl-3 col-md-6 col-sm-12"
            data-aos="fade-left"
            data-aos-offset="400"
            data-aos-easing="ease-in-sine"
          >
            <Card style={{ width: "18rem" }} className="card">
              <Card.Body>
                <img src={Peinado6} alt="color" className="w-100" />
              </Card.Body>
            </Card>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12 my-5" data-aos="zoom-out">
            <Card style={{ width: "18rem" }} className="card ">
              <Card.Body>
                <img src={Peinado7} alt="color" className="w-100" />
              </Card.Body>
            </Card>
          </div>
          <div
            className="col-xl-3 col-md-6 col-sm-12"
            data-aos="fade-right"
            data-aos-offset="400"
            data-aos-easing="ease-in-sine"
          >
            <Card style={{ width: "18rem" }} className="card">
              <Card.Body>
                <img src={Peinado8} alt="color" className="w-100" />
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row ">
          <div className="row p-2 my-2">
            <div
              className="col-xl-3 col-md-6 col-sm-12 my-5"
              data-aos="zoom-out"
            >
              <Card style={{ width: "18rem" }} className="card ">
                <Card.Body>
                  <img src={Peinado9} alt="color" className="w-100" />
                </Card.Body>
              </Card>
            </div>
            <div
              className="col-xl-3 col-md-6 col-sm-12"
              data-aos="fade-right"
              data-aos-offset="400"
              data-aos-easing="ease-in-sine"
            >
              <Card style={{ width: "18rem" }} className="card">
                <Card.Body>
                  <img src={Peinado10} alt="color" className="w-100" />
                </Card.Body>
              </Card>
            </div>
            <div
              className="col-xl-3 col-md-6 col-sm-12 my-5"
              data-aos="fade-left"
              data-aos-offset="400"
              data-aos-easing="ease-in-sine"
            >
              <Card style={{ width: "18rem" }} className="card ">
                <Card.Body>
                  <img src={Peinado11} alt="color" className="w-100" />
                </Card.Body>
              </Card>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12" data-aos="zoom-out">
              <Card style={{ width: "18rem" }} className="card">
                <Card.Body>
                  <img src={Peinado12} alt="color" className="w-100" />
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="row p-2 my-2">
            <div
              className="col-xl-3 col-md-6 col-sm-12 my-5"
              data-aos="zoom-out"
            >
              <Card style={{ width: "18rem" }} className="card ">
                <Card.Body>
                  <img src={Peinado13} alt="color" className="w-100" />
                </Card.Body>
              </Card>
            </div>
            <div
              className="col-xl-3 col-md-6 col-sm-12"
              data-aos="fade-left"
              data-aos-offset="400"
              data-aos-easing="ease-in-sine"
            >
              <Card style={{ width: "18rem" }} className="card">
                <Card.Body>
                  <img src={Peinado15} alt="color" className="w-100" />
                </Card.Body>
              </Card>
            </div>
            <div
              className="col-xl-3 col-md-6 col-sm-12 my-5"
              data-aos="fade-right"
              data-aos-offset="400"
              data-aos-easing="ease-in-sine"
            >
              <Card style={{ width: "18rem" }} className="card ">
                <Card.Body>
                  <img src={Peinado16} alt="color" className="w-100" />
                </Card.Body>
              </Card>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12" data-aos="zoom-out">
              <Card style={{ width: "18rem" }} className="card">
                <Card.Body>
                  <img src={Peinado17} alt="color" className="w-100" />
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
AOS.init({
  useClassNames: true,
  initClassName: false,
});

export default Peinados;
