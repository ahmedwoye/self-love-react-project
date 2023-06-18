import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';

 
function Gallery() {
    return (
      <>
       <h1 className='gallery'>Gallery</h1>
  
       
         <Cards />
        <Footer /> 
      </>
    );
  }
  
  export default Gallery;