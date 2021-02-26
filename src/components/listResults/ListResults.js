import React from 'react';
import { connect } from 'react-redux';
/* Here we list all results retrieved from our API */
/* Results come in as an object with an hits: [] */
const ListResults = ({ searchResults }) => {
  const renderResults = () => {
    return searchResults.hits.map((el, index) => {
      return (
        <div key={index}>
          <a href={el.url} target="#">
            {el.title}
          </a>
        </div>
      );
    });
  };
  /* We need this conditional because we will run into searchResults.hits does not exists */
  return (
    <div>
      <h1>Search Results</h1>
      {searchResults ? renderResults() : 'Empty'}
    </div>
  );
};
const mapStateToProps = ({ searchResults }) => {
  return { searchResults };
};
export default connect(mapStateToProps, null)(ListResults);
