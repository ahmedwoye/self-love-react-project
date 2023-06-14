import "./styles.css";
import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import image1 from "./images/image1.jpg";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' exact component={Home} />
        </Routes>

        <div className="App">
      <div class="container">
        <div class="side">
        <img alt="facebook" width="100%" src={image1} />
        </div>
        <div class="side side-content-center">
       
            <p>I create affordable, magical images for your company with me as a model.
Instagram  | Digital creator | Brand ambassador & influencer | Fashion and Style | Modelling
Manchester,  UK | & | Upsala, Sweden
</p>



 
</div>


  
</div>
      </div>

     
    
      </Router>
     

 
    </>

  
  );
}

export default App;
