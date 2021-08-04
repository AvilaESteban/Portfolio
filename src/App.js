import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from "./components/common/Header";
import Home from "./components/principal/Home";
import Project5 from "./components/projectNumbers/five/Project5";
import Project4 from "./components/projectNumbers/four/Project4";
import Project1 from "./components/projectNumbers/one/Project1";
import Project6 from "./components/projectNumbers/six/Project6";
import Project3 from "./components/projectNumbers/three/Project3";
import Project2 from "./components/projectNumbers/two/project2";
import About from "./components/section/About";
import Contact from "./components/section/Contact";
import Education from "./components/section/Education";
import Project from "./components/section/Project";

function App() {
  return (
       <>
       <Router>
         <Switch>
           <Route exact={true} path='/home'>
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
           <Route exact={true} path='/project5'>
              <Project5/>
           </Route>
           <Route exact={true} path='/project6'>
              <Project6/>
           </Route>
         </Switch>
           {/* <!-- Presentation--> */}
         
           {/* <!-- Navbar --> */}
           <Header/>
       </Router>
           
          
           
          
          

       </>
  );
}

export default App;
