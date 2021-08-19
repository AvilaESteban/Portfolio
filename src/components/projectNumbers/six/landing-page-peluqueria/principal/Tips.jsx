import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Producto1 from "../Assets/img/productos/producto1.jpg";
import Pelu1 from "../Assets/img/gif/pelu1.gif";
import Pelu2 from "../Assets/img/gif/pelu2.gif";
import Pelu3 from "../Assets/img/gif/pelu3.gif";
import Pelu4 from "../Assets/img/gif/pelu4.gif";
import Pelu5 from "../Assets/img/gif/pelu5.gif";
import Pelu9 from "../Assets/img/gif/pelu9.gif";
import Pelu8 from "../Assets/img/gif/pelu8.gif";
import Pelu10 from "../Assets/img/gif/pelu10.gif";
import Toast from "react-bootstrap/Toast";
import "../Assets/style.css";

const Tips = () => {
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);
  const [showC, setShowC] = useState(true);
  const [showD, setShowD] = useState(true);
  const [showE, setShowE] = useState(true);
  const [showF, setShowF] = useState(true);
  const [showG, setShowG] = useState(true);
  const [showH, setShowH] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);
  const toggleShowC = () => setShowC(!showC);
  const toggleShowD = () => setShowD(!showD);
  const toggleShowE = () => setShowE(!showE);
  const toggleShowF = () => setShowF(!showF);
  const toggleShowG = () => setShowG(!showG);
  const toggleShowH = () => setShowH(!showH);

  return (
    <>
      <div className="conntainer p-5   tips">
        <div className="row my-2 p-2">
          <div className="col-xl-3 col-md-6 col-sm-12 ">
            <Card style={{ width: "18rem" }} className="card">
              <Card.Body>
                <Card.Title>
                  Tratamiento anti-caída para cabello seco
                </Card.Title>
                <Card.Text>
                  ¿Quieres luchar contra la caída sin dejar a un lado la
                  suavidad y brillo de tu cabello? Encuentra tu cambio en
                  nuestra salon de peluqueria
                </Card.Text>
                <Toast onClose={toggleShowA} show={showA} animation={false}>
                  <Toast.Header>
                    <strong className="mr-auto">Peluqueria's</strong>
                    <small>Productos</small>
                  </Toast.Header>
                  <Toast.Body>
                    Adquirilo en nuestro showroom, 50% descuentos con tarjeta
                    Naranja
                  </Toast.Body>
                  <img src={Pelu9} alt="color" className="w-100" />
                </Toast>
                <Button
                  onClick={toggleShowA}
                  variant="dark"
                  className="btn btn-outline-light w-100"
                >
                  ver Mas..
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-xl-3 col-md-6 col-sm-12">
            <Card style={{ width: "18rem" }} className="card">
              <Card.Body>
                <Card.Title>
                  Cómo hacer que tu color sea más radiante
                </Card.Title>
                <Card.Text>
                  Para cabello coloreado, L’Huile Rose Elixir Ultime es el paso
                  ideal para finalización. Está infundido con aceites nutrientes
                  de Camelia Marula para un brillo irresistible y extract de Té
                  Blanco para potenciar la profundidad del color. Acá te
                  explicamos como usarlo.
                </Card.Text>
                <Toast onClose={toggleShowB} show={showB} animation={false}>
                  <Toast.Header>
                    <strong className="mr-auto">Peluqueria's</strong>
                    <small>Productos</small>
                  </Toast.Header>
                  <Toast.Body>
                    Adquirilo en nuestro showroom, 50% descuentos con tarjeta
                    Naranja
                  </Toast.Body>
                  <img src={Pelu1} alt="color" className="w-100" />
                </Toast>
                <Button
                  onClick={toggleShowB}
                  variant="dark"
                  className="btn btn-outline-light w-100"
                >
                  ver Mas..
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-xl-3 col-md-6 col-sm-12">
            <Card style={{ width: "18rem" }} className="card">
              <Card.Body>
                <Card.Title>Cómo usar aceites en cabello fino</Card.Title>
                <Card.Text>
                  La estática y efecto opaco son problemas comunes para el
                  cabello fino. Agregar un poco de brillo es la manera perfecta
                  de refrescar el cabello, darle algo de volumen y agregar un
                  delicioso destello fragante. Acá te mostramos como usar los
                  aceites en casa
                </Card.Text>
                <Toast onClose={toggleShowC} show={showC} animation={false}>
                  <Toast.Header>
                    <strong className="mr-auto">Peluqueria's</strong>
                    <small>Productos</small>
                  </Toast.Header>
                  <Toast.Body>
                    Adquirilo en nuestro showroom, 50% descuentos con tarjeta
                    Naranja
                  </Toast.Body>
                  <img src={Pelu2} alt="color" className="w-100" />
                </Toast>
                <Button
                  onClick={toggleShowC}
                  variant="dark"
                  className="btn btn-outline-light w-100"
                >
                  ver Mas..
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-xl-3 col-md-6 col-sm-12">
            <Card style={{ width: "18rem" }} className="card">
              <Card.Body>
                <Card.Title>
                  Cómo hacer brillar tu cabello con color el día 2?
                </Card.Title>
                <Card.Text>
                  Usar un aceite para potenciar el color de tu cabello en algún
                  peinado o el segundo día después del lavado es uno de nuestros
                  consejos favoritos. Solo una bomba o tres revive tu color y
                  refresca tus mechas con un brillo fragante irresistible
                </Card.Text>
                <Toast onClose={toggleShowD} show={showD} animation={false}>
                  <Toast.Header>
                    <strong className="mr-auto">Peluqueria's</strong>
                    <small>Productos</small>
                  </Toast.Header>
                  <Toast.Body>
                    Adquirilo en nuestro showroom, 50% descuentos con tarjeta
                    Naranja
                  </Toast.Body>
                  <img src={Pelu8} alt="color" className="w-100" />
                </Toast>
                <Button
                  onClick={toggleShowD}
                  variant="dark"
                  className="btn btn-outline-light w-100"
                >
                  ver Mas..
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="row my-2 p-2">
          <div className="col-xl-3 col-md-6 col-sm-12">
            <Card style={{ width: "18rem" }} className="card">
              <Card.Body>
                <Card.Title>
                  Cómo aumentar la nutrición de tu mascara capilar
                </Card.Title>
                <Card.Text>
                  Tu máscara ya nutre pofundamente pero hay una forma de hacerla
                  aún más potente. Esta mezcla milagrosa lleva el cabello grueso
                  y opaco a un nuevo nivel de brillo.
                </Card.Text>
                <Toast onClose={toggleShowE} show={showE} animation={false}>
                  <Toast.Header>
                    <strong className="mr-auto">Peluqueria's</strong>
                    <small>Productos</small>
                  </Toast.Header>
                  <Toast.Body>
                    Adquirilo en nuestro showroom, 50% descuentos con tarjeta
                    Naranja
                  </Toast.Body>
                  <img src={Pelu10} alt="color" className="w-100" />
                </Toast>
                <Button
                  onClick={toggleShowE}
                  variant="dark"
                  className="btn btn-outline-light w-100"
                >
                  ver Mas..
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-xl-3 col-md-6 col-sm-12">
            <Card style={{ width: "18rem" }} className="card">
              <Card.Body>
                <Card.Title>Adecuado tratamiento del color</Card.Title>
                <Card.Text>
                  Gama multiprotectora para el cabello con color con 3 niveles
                  de personalización: sensibilización de la fibra, grosor del
                  cabello y color con Touche Chromatique.
                </Card.Text>
                <Toast onClose={toggleShowF} show={showF} animation={false}>
                  <Toast.Header>
                    <strong className="mr-auto">Peluqueria's</strong>
                    <small>Productos</small>
                  </Toast.Header>
                  <Toast.Body>
                    Adquirilo en nuestro showroom, 50% descuentos con tarjeta
                    Naranja
                  </Toast.Body>
                  <img src={Pelu5} alt="color" className="w-100" />
                </Toast>
                <Button
                  onClick={toggleShowF}
                  variant="dark"
                  className="btn btn-outline-light w-100"
                >
                  ver Mas..
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-xl-3 col-md-6 col-sm-12">
            <Card style={{ width: "18rem" }} className="card">
              <Card.Body>
                <Card.Title>Moño trenzado</Card.Title>
                <Card.Text>
                  Eleva la apuesta con este moño bajo. Este sencillo moño
                  trenzado, que puede hacerse en solo siete pasos, es ultrachic
                  y perfecto para todas las ocasiones.
                </Card.Text>
                <Toast onClose={toggleShowG} show={showG} animation={false}>
                  <Toast.Header>
                    <strong className="mr-auto">Peluqueria's</strong>
                    <small>Productos</small>
                  </Toast.Header>
                  <Toast.Body>
                    Adquirilo en nuestro showroom, 50% descuentos con tarjeta
                    Naranja
                  </Toast.Body>
                  <img src={Pelu4} alt="color" className="w-100" />
                </Toast>
                <Button
                  onClick={toggleShowG}
                  variant="dark"
                  className="btn btn-outline-light w-100"
                >
                  ver Mas..
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-xl-3 col-md-6 col-sm-12">
            <Card style={{ width: "18rem" }} className="card">
              <Card.Body>
                <Card.Title>Moño envuelto</Card.Title>
                <Card.Text>
                  La espléndida estructura y el gran brillo hacen que este look
                  sea ideal para destacarse. Este es el look perfecto si buscas
                  tener un brillo adicional con algunos elegantes torzales.
                </Card.Text>
                <Toast onClose={toggleShowH} show={showH} animation={false}>
                  <Toast.Header>
                    <strong className="mr-auto">Peluqueria's</strong>
                    <small>Productos</small>
                  </Toast.Header>
                  <Toast.Body>
                    Adquirilo en nuestro showroom, 50% descuentos con tarjeta
                    Naranja
                  </Toast.Body>
                  <img src={Pelu3} alt="color" className="w-100" />
                </Toast>
                <Button
                  onClick={toggleShowH}
                  variant="dark"
                  className="btn btn-outline-light w-100"
                >
                  vver Mas..
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tips;
