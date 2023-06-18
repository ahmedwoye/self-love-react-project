import "./styles.css";
import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';
import AboutPage from './components/pages/AboutPage';
// import image1 from "./images/image1.jpg";
 import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
         <Route path='/'  exact component={Home} /> 
         <Route path='/gallery' component={Gallery} />
         <Route path='/contact' component={Contact} />
         <Route path='/about' component={AboutPage} />

        </Switch>

 

     
    
      </Router>
     

 
    </>

  
  );
}

export default App;
