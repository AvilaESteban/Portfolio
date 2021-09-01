import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from "./components/common/Header";
import Home from "./components/principal/Home";
import Project8 from "./components/projectNumbers/eight/Project8";
import Project9 from "./components/projectNumbers/nine/Project9";
import Project10 from "./components/projectNumbers/ten/Project10";
import Project11 from "./components/projectNumbers/eleven/Project11";
import Project12 from "./components/projectNumbers/twelve/Project12";
import Project5 from "./components/projectNumbers/five/Project5";
import Project4 from "./components/projectNumbers/four/Project4";
import Project1 from "./components/projectNumbers/one/Project1";
import Project7 from "./components/projectNumbers/seven/Project7";
import Project6 from "./components/projectNumbers/six/Project6";
import Project3 from "./components/projectNumbers/three/Project3";
import Project2 from "./components/projectNumbers/two/project2";
import Cv from './components/section/education/CV/Cv';
import About from "./components/section/about/About";
import Contact from "./components/section/contact/Contact";
import Education from "./components/section/education/Education";
import Project from "./components/section/project/Project";
import Galeria from '././././components/projectNumbers/nine/VacacionesCody/Galeria'
import VacacionesCody from '././././components/projectNumbers/nine/VacacionesCody/Inicio'


function App() {
  return (
       <>
       <Router>
         <Switch>
           <Route exact={true} path='/'>
              <Home/>
           </Route>
           <Route exact={true} path='/about'>
              <About/>
           </Route>
           <Route exact={true} path='/education'>
              <Education/>
           </Route>
           <Route exact={true} path='/project'>
              <Project/>
           </Route>
           <Route exact={true} path='/contact'>
              <Contact/>
           </Route>
           <Route exact={true} path='/project1'>
              <Project1/>
           </Route>
           <Route exact={true} path='/project2'>
              <Project2/>
           </Route>
           <Route exact={true} path='/project3'>
              <Project3/>
           </Route>
           <Route exact={true} path='/project4'>
              <Project4/>
           </Route>
           <Route exact={true} path='/project4/:category'>
              <Project4/>
           </Route>
           <Route exact={true} path='/project5'>
              <Project5/>
           </Route>
           <Route exact={true} path='/project6'>
              <Project6/>
           </Route>
           <Route exact={true} path='/project7'>
              <Project7/>
           </Route>
           <Route exact={true} path='/project8'>
              <Project8/>
           </Route>
           <Route exact={true} path='/project9'>
              <Project9/>
           </Route>
           <Route exact={true} path='/project10'>
              <Project10/>
           </Route>
           <Route exact={true} path='/project11'>
              <Project11/>
           </Route>
           <Route exact={true} path='/project12'>
              <Project12/>
           </Route>
           {/* Seccion project 9 VacacionesCody */}
           <Route exact={true} path='/project9/galeria'>
              <Galeria/>
           </Route>
           <Route exact={true} path='/project9/inicio'>
              <VacacionesCody/>
           </Route>
             <Route exact={true} path='/education/cv'>
              <Cv/>
           </Route>
         </Switch>
           {/* <!-- Navbar --> */}
           <Header/>
       </Router>
           
       </>
  );
}

export default App;
