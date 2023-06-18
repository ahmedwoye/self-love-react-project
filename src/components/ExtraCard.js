import React from 'react';
import './ExtraCard.css';
import CardItem from './ExtraCardItem';

function ExtraCard() {
  return (
    <div className='cards'>
      {/* <h1>Check out these Memorable Journey!</h1> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/image2.jpg'
              text='I create affordable, magical images for your company with me as a model.
              Instagram  | Digital creator | Brand ambassador & influencer | Fashion and Style | Modelling
              Manchester,  UK | & | Uppsala, Sweden
              '
              label='About Me'
              path=''
            />
             </ul>
        </div>
      </div>
    </div>
  );
}

export default ExtraCard;
