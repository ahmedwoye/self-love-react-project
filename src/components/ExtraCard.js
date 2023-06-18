import React from 'react';
import './ExtraCard.css';
import CardItem from './ExtraCardItem';
import '../styles.css';

function ExtraCard() {
  return (
    <div className='cards'>
         <p>Self-love is not selfish; it is the foundation of our well-being. When we embrace our worthiness, we radiate a light that illuminates our path to happiness and empower us to lift others.</p>
       <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/image1.jpg'
              text='I create affordable, magical images for your company with me as a model.
              Instagram  | Digital creator | Brand ambassador & influencer | Fashion and Style | Modelling
              Manchester,  UK | & | Uppsala, Sweden
              '
              label='About Me'
              path='/about'
            />
             </ul>
        </div>
      </div>
    </div>
  );
}

export default ExtraCard;
