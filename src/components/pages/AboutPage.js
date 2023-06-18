import React from 'react';
import '../../App.css';
import AboutCard from '../AboutCard';
import Footer from '../Footer';

 
function AboutPage() {
    return (
      <>
       <h1 className='about'>Clement Shobayou</h1>
       <p>Age: 32 years
Ethnicity: Black African
Height: 175 cm
Hair: Black
Eyes: Brown
Shoe size: 43
Top: /M
Bottom: /M
Waist: 32/32
</p>
  
       
         <AboutCard />
        <Footer /> 
      </>
    );
  }
  
  export default AboutPage;