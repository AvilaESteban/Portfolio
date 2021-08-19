import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Error404 from "./ErrorPage/Error404";
import Contacto from "./principal/Contacto";
import Galeria from "./principal/Galeria";
import Inicio from "./principal/Inicio";
import Peinados from "./principal/Peinados";
import QuienesSomos from "./principal/QuienesSomos";
import Tips from "./principal/Tips";
import "aos/dist/aos.css";


function LandingPagePeluqueria() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Switch>
            <Route exact path="/project6/inicio">
              <Inicio />
            </Route>
            <Route exact={true} path="/project6/principal/galeria">
              <Galeria />
            </Route>
            <Route exact={true} path="/project6/principal/quienesSomos">
              <QuienesSomos />
            </Route>
            <Route exact={true} path="/project6/principal/peinados">
              <Peinados />
            </Route>
            <Route exact={true} path="/project6/principal/tips">
              <Tips />
            </Route>
            <Route exact={true} path="/project6/principal/contacto">
              <Contacto />
            </Route>
            <Route exact={true} path="*">
              <Error404 />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default LandingPagePeluqueria;
