import { useState, useCallback } from 'react';
import useDataCard from '../../hooks/useDataCard';
import { DataCard } from '../DataCard';

const CardGrid = () => {
  const filterTags = [
    'CMS Selection',
    'Experience Design',
    'Development',
    'UX',
    'Content Strategy',
    'Visual Design',
    'Sitecore',
    'Adobe Analytics',
    'Digital Strategy',
    'Analytics',
    'Consulting',
    'AEM',
    'Adobe DAM',
    'Technical Design & Architecture',
    'eCommerce',
    'Tealium',
    'SEO',
    'Livestream',
    'Video Library',
    'Information Architecture',
    'Documentation & Training',
    'Ongoing Engineering',
    'Strategy',
    'Development (Adobe AEM)',
    'Adobe Target',
    'Ongoing Consulting',
    'CX Strategy',
    'User Research',
    'Mobile',
    'Salesforce Marketing Cloud)',
    'Taxonomy',
    'Photography',
    'Adobe Search & Promote',
    'Product Design',
    'Copywriting',
    'Digital Communities',
    'Jive',
    'dam',
    'User research',
    'Web Development',
  ];

  const { data, hasFailed } = useDataCard();

  const [tags, setTags] = useState([]);
  const [isOpen, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!isOpen);

  const addTag = useCallback(
    (tagId) => () => {
      if (!tags.includes(tagId)) {
        return setTags((prevTags) => [...prevTags, tagId]);
      }
      // Remove tag if already
      const tagsFiltered = tags.filter((tag) => {
        return tag !== tagId;
      });
      setTags(tagsFiltered);
    },
    [tags]
  );

  const matchTags = (current, target) => {
    return target.every((tag) => current.includes(tag));
  };

  if (hasFailed) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <div className='tags'>
        <div className='dropdown'>
          <div className='dropdown dropdown--header' onClick={toggleDropdown}>
            Select Filter
            <span className={`chevron--right ${isOpen && 'open'}`}></span>
          </div>
          <div className={`dropdown dropdown--body ${isOpen && 'open'}`}>
            {filterTags.map((tag) => {
              const active = tags.find((actualTag) => actualTag === tag);
              return (
                <button
                  className={`button button--${active === tag ? 'active' : ''}`}
                  key={tag}
                  type='button'
                  onClick={addTag(tag)}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className='grid'>
        {data
          ?.filter((card) => matchTags(card.tags, tags))
          .map((cardData) => (
            <div className='grid__card' key={cardData.id}>
              <DataCard card={cardData} />
            </div>
          ))}
      </div>
    </>
  );
};

export { CardGrid };
