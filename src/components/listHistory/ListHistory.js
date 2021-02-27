import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../action';
import { structureQuery } from '../../util/structureQuery';
/* We will get search history from reducers */
const ListHistory = ({
  searchHistory,
  search,
  currentQuery,
  currentApiQuery,
}) => {
  const renderCurrentQuery = () => {
    if (currentQuery) {
      return `search=${currentQuery.query}${setTag()}&page=${
        currentQuery.page
      }`;
    }
    return 'empty';
  };
  /* When the user clicks the history link we will dynamically update the current query */
  const onClick = (query) => {
    currentApiQuery(query);
    search(query);
  };
  /* We will track the user history of searches and also make them re-search the term */
  /* The search history is an array of {query: '', tag: ''} */
  const renderList = () => {
    return searchHistory.map((el, index) => {
      const query = structureQuery(el.query, el.tags);
      return (
        <div
          key={index}
          className="link"
          onClick={() => onClick(query)}
        >
          Search:{el.query}, Tag: {el.tags}
        </div>
      );
    });
  };
  /* if tag is present, render it, else do not */
  const setTag = () => {
    if (currentQuery.tags) return `&tag=${currentQuery.tags}`;
    else return '';
  };
  return (
    <div>
      <h1>Search History</h1>
      {renderList()}
      <h4>Current Query: {renderCurrentQuery()}</h4>
    </div>
  );
};
/* grab searchHistory from store */
const mapStateToProps = ({ searchHistory, currentQuery }) => {
  return { searchHistory, currentQuery };
};
export default connect(mapStateToProps, actions)(ListHistory);
