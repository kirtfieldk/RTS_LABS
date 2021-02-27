import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../action';
import { structureQuery } from '../../util/structureQuery';
/* We will get search history from reducers */
const ListHistory = ({ searchHistory, search, currentQuery }) => {
  /* We will track the user history of searches and also make them re-search the term */
  /* The search history is an array of {query: '', tag: ''} */
  const renderList = () => {
    return searchHistory.map((el, index) => {
      const query = structureQuery(el.query, el.tags);
      return (
        <div
          key={index}
          className="link"
          onClick={() => search(query)}
        >
          Search:{el.query}, Tag: {el.tags}
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Search History</h1>
      {renderList()}
      <h4>
        Current Query:
        {currentQuery
          ? `search=${currentQuery.query}&tag=${currentQuery.tags}&page=${currentQuery.page}`
          : 'None'}
      </h4>
    </div>
  );
};
/* grab searchHistory from store */
const mapStateToProps = ({ searchHistory, currentQuery }) => {
  return { searchHistory, currentQuery };
};
export default connect(mapStateToProps, actions)(ListHistory);
