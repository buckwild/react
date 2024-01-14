import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import travelpic9 from './images/img-9.jpg';
import travelpic2 from './images/img-2.jpg';
import travelpic3 from './images/img-3.jpg';
import travelpic4 from './images/img-4.jpg';
import travelpic8 from './images/img-8.jpg';


function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                        src={travelpic9} 
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label='Adventure'
                        path='/services' />
                    
                    <CardItem 
                        src={travelpic2} 
                        text="Travel through the Island of Bali in a private cruise"
                        label='Luxury'
                        path='/services' />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                        src={travelpic3} 
                        text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                        label='Mystery'
                        path='/services' />
                    
                    <CardItem 
                        src={travelpic4} 
                        text="Experience Football on Top of the Himalayan"
                        label='Adventure'
                        path='/services' />
                    <CardItem 
                        src={travelpic8} 
                        text="Ride through the Sahara Desert on a guided camel tour"
                        label='Adrenaline'
                        path='/services' />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards