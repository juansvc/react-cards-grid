import React from 'react';

const DataCard = ({ card }) => {
  return (
    <div className='card'>
      <div className='card__face card__face--front'>
        <div className='card__image' role='img' aria-label='Card Img'>
          <img src={card.image} alt='Product Img' loading='lazy' />
        </div>
        <div className='content'>
          <h2 className='content__title'>
            {/* Check title after colon */}
            {card.title.indexOf(':') !== -1
              ? card.title.split(':')[1]
              : card.title}
          </h2>
          <p className='content__description--truncated'>{card.description}</p>
        </div>
      </div>
      <div className='card__face card__face--back'>
        <div className='card__image' role='img' aria-label='Card Img'>
          <img src={card.image} alt='Product Img' loading='lazy' />
        </div>
        <div className='content'>
          <h2 className='content__title'>{card.id}</h2>
          {/* <div className='tag'> */}
          {card.tags.map((tag) => (
            <span className='tag'>{tag}</span>
          ))}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export { DataCard };
