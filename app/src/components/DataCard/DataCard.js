import React from 'react';

const DataCard = ({ card }) => {
  return (
    <>
      <h2>{card.title}</h2>
      <p>{card.description}</p>
    </>
  );
};

export { DataCard };
