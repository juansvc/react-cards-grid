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
        {card.featured ? <div className='card__flag'>FEATURED</div> : null}
      </div>
      <div className='card__face card__face--back'>
        <div className='card__image' role='img' aria-label='Card Img'>
          <img src={card.image} alt='Product Img' loading='lazy' />
        </div>
        <div className='content'>
          <h2 className='content__title'>{card.id}</h2>
          {card.tags?.map((tag) => (
            <span key={tag} className='tag'>
              {tag}
            </span>
          ))}
        </div>
        <a href={card.url} target='_blank' rel='noreferrer' className='cta'>
          {/* not necessary to include a svg or library only for one icon, look at this amazing chevron made by scss */}
          LEARN MORE<span class='chevron--right'></span>
        </a>
      </div>
    </div>
  );
};

export { DataCard };
