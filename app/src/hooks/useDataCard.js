import { useEffect, useState } from 'react';

function useDataCard() {
  const [hasFailed, setHasFailed] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setHasFailed(false);
    fetch(
      'https://s3-us-west-1.amazonaws.com/hero-engineering-public/interview/fe-code-challenge.json'
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error();
        }
      })
      .then((postsData) => {
        setData(postsData.cards);
      })
      .catch(() => {
        setHasFailed(true);
      });
  }, []);

  return {
    data,
    hasFailed,
  };
}

export default useDataCard;
