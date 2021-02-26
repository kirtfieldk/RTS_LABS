import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../action';
/* We will get search history from reducers */
const ListHistory = ({ searchHistory, search }) => {
  /* We will render the list of search results, an array of strings */
  const renderList = () => {
    return searchHistory.map((el, index) => {
      return (
        <div key={index} className="link" onClick={() => search(el)}>
          {el}
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Search History</h1>
      {renderList()}
    </div>
  );
};
const mapStateToProps = ({ searchHistory }) => {
  return { searchHistory };
};
export default connect(mapStateToProps, actions)(ListHistory);
