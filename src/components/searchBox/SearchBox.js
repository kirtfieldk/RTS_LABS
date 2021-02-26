import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../action';
const SearchBox = ({ addSearchResult, search }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const onSubmit = () => {
    /* on submit we will add the search term to our term reducer array,
        Search the term via the API,
        and then reset the search term at the vary end
    */
    addSearchResult(searchTerm);
    search(searchTerm);
    /* Reset the search term so input field is blank */
    setSearchTerm('');
  };
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={onSubmit}>Search</button>
    </div>
  );
};

export default connect(null, actions)(SearchBox);
