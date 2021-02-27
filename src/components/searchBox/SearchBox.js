import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../action';
import TagQuery from '../tagQuery/TagQuery';
import { structureQuery } from '../../util/structureQuery';
const SearchBox = ({ addSearchResult, search }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tags, setTag] = useState('');
  const [reset, setReset] = useState(false);
  /* Called everytime we change the reset state */
  useEffect(() => {
    /* Reset the search terms so input field is blank */
    setSearchTerm('');
    setTag('');
  }, [reset]);
  const onSubmit = () => {
    /* on submit we will add the search term to our term reducer array,
        Search the term via the API,
        and then reset the search term at the vary end
    */
    const termNoSpace = searchTerm.replace(' ', '_');
    const query = structureQuery(termNoSpace, tags);
    /* Append the reset so that the nextPage component knows when to reset its page count */
    addSearchResult({ ...query, reset: true });

    /* We need to replace all empty spaces with underscores */
    search(query);
    setReset(!reset);
  };
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={onSubmit}>Search</button>
      <TagQuery setTag={setTag} reset={reset} />
    </div>
  );
};

export default connect(null, actions)(SearchBox);
