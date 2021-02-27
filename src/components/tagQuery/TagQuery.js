import React, { useState, useEffect } from 'react';
/* Simple nested component that is called from the SearchBar component - get setTag, reset as pass down prop */
const TagQuery = ({ setTag, reset }) => {
  const [selected, setSelected] = useState(-1);
  const tags = [
    'story',
    'comment',
    'poll',
    'pollopt',
    'show_hn',
    'ask_hn',
    'front_page',
  ];
  /* Everytime reset is changed we will erase the selected index */
  useEffect(() => {
    setSelected(-1);
  }, [reset]);
  /* Set the tag with a string from the tags array */
  const setSelect = (index) => {
    setTag(tags[index]);
    setSelected(index);
  };
  /* Show the tags and query api by tag choosen */
  /* Chosen tag's background is beige  */
  const renderTags = () => {
    return tags.map((el, index) => {
      return (
        <div
          key={index}
          className={index === selected ? 'selected_tag' : 'tag'}
          onClick={() => setSelect(index)}
        >
          {el}
        </div>
      );
    });
  };
  return (
    <div>
      Tag?
      <div>{renderTags()}</div>
    </div>
  );
};

export default TagQuery;
