import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Memorable Journey!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/image21.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path=''
            />
            <CardItem
img src='/images/image27.jpg' 
              
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path=''
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/image288.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path=''
            />
            <CardItem
              src='/images/image23.jpg'
              text='Experience the beauty of life'
              label='Adventure'
              path=''
            />
            <CardItem
              src='/images/image270.jpg'
              text='Ride through the ladder of success'
              label='Adrenaline'
              path=''
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
