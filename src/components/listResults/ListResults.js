import React from 'react';
import { connect } from 'react-redux';
/* Here we list all results retrieved from our API */
/* Results come in as an object with an hits: [] */
const ListResults = ({ searchResults }) => {
  /* In some cases our elements have empty/null values for title, in that case we will return story_title */
  const renderResults = () => {
    console.log(searchResults);
    return searchResults.hits.map((el, index) => {
      return (
        <div key={index}>
          <a href={el.url} target="#">
            {el.title
              ? `Title: ${el.title}`
              : `Story Title: ${el.story_title}`}
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
/* grab searchResults from store */
const mapStateToProps = ({ searchResults }) => {
  return { searchResults };
};
export default connect(mapStateToProps, null)(ListResults);
