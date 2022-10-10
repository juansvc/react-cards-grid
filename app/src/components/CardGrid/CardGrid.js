import React from 'react';
import useDataCard from '../../hooks/useDataCard';
import { DataCard } from '../DataCard';

const CardGrid = () => {
  const { data, hasFailed } = useDataCard();

  if (hasFailed) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className='grid'>
      {data?.map((cardData) => (
        <div className='grid__card' key={cardData.id}>
          <DataCard card={cardData} />
        </div>
      ))}
    </div>
  );
};

export { CardGrid };
