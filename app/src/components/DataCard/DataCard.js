import React from 'react';
import useDataCard from '../../hooks/useDataCard';

const DataCard = () => {
  const { data, hasFailed } = useDataCard();

  if (hasFailed) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      {data?.map((card) => (
        <div key={card.id}>
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export { DataCard };
